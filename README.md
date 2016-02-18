# Beholder: driver for drive performance test utils

---
## Overview

When the performance or any kind of test is running, it is common to execute other tools like
log analyzer, profiler and screen recorder at the same time. However, manually commanding these
tools is inefficient, the result may also be inaccurate. To have a controller of those helpers is
also imperative to automation tests, in which developers may need the data to perform further debugging.

As a result, Beholder, as the tool and controller developed in this project, it can coordinate
multiple heterogeneous tools and make their dependencies more clear by adopting a message-based architecture.
Benefits from the that and the nature of asynchronous in Node.js, we can make the controller and actually working
units more flexible and have great potential to boost the performance.

---
## Usage

To run it with the specific Raptor test:

    node ./dist/beholder.js <path to test file> -r devicelog -r screenrecord --adb `which adb` --command signal --record-target-device /sdcard/record.mp4 --record-target-console <local directory>/record.mp4 --ffmpeg `which ffmpeg` --output <result file>

This line will run the Raptor test, and invoke all tools specified by `-r` options. In this case, the commanding module is `signal`,
which will capture specific key event as interruption to end the program.

The `output` file can be pipe file, so user can monitor it lively.

Beholder exposes all configures as command line options, so it can have a configure file with necessary options.

---
## Features

1. Modules performing command is easy to implement: extend the defined base `Router` class with customized methods to respond various status and data
2. The dependencies among modules is representing the data dependencies: each module handle the data streams it interests in
3. The message-based architecture make it easy to be improved with a truly parallel mechanism like IPC or even a network
4. It hides most of state changing and asynchronous issues, so that the user and developer only need to focus on generating and collecting data

---
## Architecture

In Beholder, there are several data generating and processing units called `Routers`, which
will get the console and device output by executing some commands like `adb logcat`.
These data I/O units may depend on each other, so they are connected by `channels` in `csp`.
For those routers directly perform shell commands, some client routers like log analyzer or
error reporter may listen to them, while these clients may also be subscribed by further
routers. By adapting the idea of forwarding essential control message, Beholder could reduce
the coupling among individual routers to only rely on one `Control router`. This means
even the `Command router`, which is obligated to order others changing their `stages`,
doesn't need to know what kinds of routers in the system, and move the extra effort
of commanding other routers out of a simple data handling unit.

---
### Routers

Router could has one output channel and multiple input channels.

For a router, it should handle all the input channels with only one set of handlers.
This is for keeping routers as basic I/O consumers and producers. If a router must deal with
incoming data from multiple inputs, these data should be homogeneously with the same type,
so that the router could only manipulate the common part among these data. In fact, it is an
anti-pattern to have two or more set of handlers inside a router. In this case, it
should be split into different routers, albeit a implicit control channel will be monitored by all routers.

Similarly, a router should only have exactly one output channel. Different types of data should be tagged
as different packages, rather than go by different channels. This is because that the dependencies of
channels should represent the router dependencies; adding more semantics on that will complicate the architecture.

Routers will generate `status`, `data` and `error` in its output channel,
so that others could deal them with different handlers, which may even in different stages.

---
### Stages

Stages indicate different sets of handler should be invoked. Routers encapsulate different stage methods in one
class, because they are relevant by sharing the processed data and functions. It is also essential for one execution
session to wait all routers changing their stages before moving onto the next stage, because routers may need to know
what to be collected from and emitted to others. For example, a log router should end its logging task and turn to
log filtering stage after the command router finished the test running on the device, so it needs to wait the signal
of stage change from `recording` to `collecting` from the controller router. In a system composed of routers,
various messages may flow in multiple channels and handled by very different set of handlers, but stages are known by
all routers, albeit Some routers may do nothing during multiple stages.

---
### Command Router

The whole process depends on a major commanding router, which will lead to different stage change. For example,
if Raptor is the commanding router, others like logging, screen recording and profiling routers should listen to
it to end the current task and turn to another stage, like starting to analyze those previous collected data.

---
### Control Router

The program needs a launcher to initialize all routers, and after that it also needs to finalize them.
Besides that, commanding router should behave as a normal router without knowing others to prevent strong coupling,
which requires a proxy as a facade allows other routers register to it, and broadcast the stage change messages.

As a result, Beholder has a control router that every router will listen to, while the router will subscribe the
command router to forward the stage message. It is also the program launcher to build the configure from command line,
and who sends the list of initialized routers to its clients to let them build their data dependencies.

---
## Current stage and future work

Since the status of B2G project already changed, the tool now keeps as a POC with some experimental or incoming features
like:

1. Routers should be loaded dynamically and it could use path instead of predefined names
2. Controller should be able to coordinate multiple routers in different processes (from asynchronous to parallel)
3. Build system and tests
4. Low-level adapter for different data sources
5. De-centralized controllers
6. Build a default configure from the build system

There already some pre-designed features in the current architecture for these planned features. If these plans could be done,
it would be a mature enough tool to support daily CI usage.
