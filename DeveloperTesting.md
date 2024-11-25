# Kapitel 1: Developer testing
    Maintenance of a system under development
    Patching and bug fixing
    Continuous Integration
    Continuous integration (CI) is the practice of integrating frequently and always keeping the main build stable.

    How much, if any, testing should developers do?
 - What kind of testing will give the best return on investment for this particular system?
 - Why is testability important, and how can it be achieved?
 - Why does a method/class/component seem untestable, and how can it be made testable?
 - What’s “testable” code anyway?
 - How “good” should test code be?
 - When is a method/class/component sufficiently covered by tests?
 - How should tests be named?
 - When should a certain kind of test-double be used?
 - What’s the best way to break this particular kind of dependency?
 - Who checks the arguments to a method? The caller or the callee?
 - How should test code be structured to avoid duplication, and is all duplication bad?
 - In test-driven development, what’s the next test to write?
 - How does one test-drive an enterprise system with many delegating layers?
 - How does one avoid combinatorial explosions in test code and still feel confident?
 - What factors determine the number of assertions in a test?
 - Should tests target state or behavior?
## Summary
Developers perform activities related to verification and quality assurance more often
than they may realize. In addition to running their code to check that it seems to
behave correctly, they:
- Write unit tests
- Write integration tests
- Perform maintenance
- Implement continuous integration
- Provide the infrastructure for test automation
Each of these activities will benefit from the developer having some fundamental
testing knowledge and skills.
Developer testing is everything developers do to test their code, and this book
describes helpful behaviors, activities, and tools related to building quality into the code.
Although developers can and should do as much as possible to ensure the correctness and quality of their software, some testing-related activities are still best
performed by someone with a skill set slightly different from the developer’s. 
Such activities include:
- Performance testing
- Security testing
- Usability testing
- Testing the untypical and pathological cases
Nothing prevents the developer from doing any of these activities, but they aren’t
covered in this book.

# Kapitel 2: Testing objectives, Styles and Roles.
    Testing is the process of evaluating a product by learning about it through exploration and experimentation, which includes to some degree: questioning, study, modeling,observation, inference,
    Motivation Behind Developer Testing
    Testing objectives - wo fundamental approaches to testing: critiquing and supporting.

    Testing to Critique
    Testing to Support
    Traditional testingz:
     Test planning and control
     Test analysis and design
     Test implementation and execution
     Evaluating exit criteria and reporting
     Test closure activities

    Behavior-driven development (BDD, North 2006), acceptance test-driven development (ATDD)
    Traditional—Process-oriented, independent, formal
    Agile testing—Proactive, integrated, collaborative
## Summary
There’s a difference between testing and checking. The former assumes curiosity and
creativity, whereas the latter is mechanical and can safely be delegated to a computer.
Testing can be performed either to critique or to support. The contents of the
developer role and tester role are greatly affected by the organizational culture and
beliefs about what the two roles are about and how they should contribute. 
In cross-functional teams, smaller companies, or agile-minded organizations, the developers
will be more involved in quality assurance, either by collaborating with testers on a
daily basis or by doing the verification and other QA activities themselves.
In larger companies or in companies that separate testing from development, the
developer may be at the mercy of the QA or testing department. There will be test
plans, and bugs will be called defects in a bug-tracking tool.
Most organizations will most likely adapt one of the following stances on testing:
- Traditional—Process-oriented, independent, formal
- Agile testing—Proactive, integrated, collaborative
Implementing behavior-driven development helps a team to collaboratively clar-
ify requirements by using concrete examples, to know when a feature is truly imple-
mented, and to create a living documentation. Regardless of a team’s situation and
access to professional testers, the fact remains that developers always have tested and
always will test their software. After all, running the main method of a program or
poking around in the user interface after making some changes is nothing but ad hoc
testing. When the dust settles, it’s the developers who reap the benefits of building in
quality and verifying it continually

# Kapitel 3: The Testing vocabulary.
    what’s really important is that you agree on the terminology in your organization.
    Errors, Defects, failure
    White box (we do have access to the source code ) and black box testing oposite.

    Tests are traditionally classified
    Along two dimensions: test level and test type
Test level: Unit
            Integration
            system
            Acceptence
test type: functional
            nonfunctional ( quality attributes such as usability, reliability, performance, maintainability and portability,):
             Performance
             security
            regresion

Functional versus Nonfunctional Testing
A good way of memorizing the difference between functional and nonfunctional tests
is remembering that functional tests target the what, whereas nonfunctional tests
target the how. For example, a functional unit test of a sorting algorithm would verify
that the input is indeed sorted. A nonfunctional unit test would time it to make sure
that it runs within a specified time constraint.

Performance testing: load testting-> stres testing -> spike testing
The agile testing quadrants: Instead of focusing on levels and types, this model emphasizes the difference
between business-facing and technology-facing test
Smoke Testing
End-to-End Testing ( system testing on steroids)
Characterization Testing

Positive and Negative Testing
    positive testing is to verify that whatever is tested works as expected and behaves like it’s supposed to
    negative testing is to verify that the system behaves correctly if supplied with invalid values and that it doesn’t generate any unexpected results
Small, Medium, and Large Tests
## Summary
Human mistakes are called errors in testing speak. Errors frequently lead to software defects—bugs. Bugs may lead to software failures.
Many of the terms in this chapter have multiple meanings and can be interpreted differently in different contexts. The purpose of this chapter is to bring to light several
key terms that are used during discussions about software development and testing.
Human mistakes are called errors in testing speak. Errors frequently lead to software defects—bugs. Bugs may lead to software failures.
White box testing assumes having access to the source code and targets the internal structure of a system, whereas black box testing is done “from the outside” and
targets the functionality.
Unit tests ensure that a small unit of code, like a function, a class, or a group
of classes, works as expected. Integration tests verify that components/systems can
talk to each other, but sometimes the term is used to describe tests that are some-
where between unit tests and system tests. System tests are run to verify an entire
system. Finally, acceptance tests are performed by the customer to make sure that the
expected system has been delivered, whereas automated acceptance tests are written
by the team and executed by a testing framework to verify that a story or scenario has
been implemented.
The Agile Testing Quadrants is a model that divides tests into dimensions of technology versus business oriented, as well as guiding the development versus critiquing
the product.
Classifying tests can clarify discussions about responsibility and what to test,
when, and how. The important thing is to use a classification that everybody in the
organization agrees on (or at least is familiar with)

# Kapitel 4: Testability From adeveLoper’s perspective

Tests are an investment with no direct return
Testability Defined: Observability and controllability

Controllability is the ability to put something in a specific state and is of paramount importance to any kind of testing because it leads to reproducibility
    Deployability is a measure of the amount of work needed to
deploy the system, most notably, into production.
    Isolability, modularity, low coupling—in this context, they’re all different ides of the same coin
    Smallness
    Singulaarity
    level of abstraction
    Efficiency
    Reuse
## Summary
If the software is designed with testability in mind, it will more than likely be tested.
When software is testable, we can verify its functionality, measure progress while
developing it, and change it safely. In the end, the result is fast and reliable delivery.
Testability can be broken down into the following components:
- Observability—Observe the tested program element in order to verify that it
actually passes the test.
- Controllability—Set the tested program element in a state expected by the test.
- Smallness—The smaller the system or program element—with respect to the
number of features and the size of the codebase—the less to test.

# Kapitel 5: Programing by contract

    The basic building blocks of contracts are preconditions,
postconditions, and class invariants.

    I testning av kod betyder assertions ("påståenden" på svenska) uttryck som används för att verifiera att en viss del av koden fungerar som förväntat. De är ett viktigt verktyg i både enhetstester och andra typer av automatiserade tester.
    assert(sum(2, 3) === 5);
## Summary
Programming by Contract is a technique complementary to testing and is about runtime verification of constraints defined by contracts. Such constraints may be pre-
conditions, postconditions and different types of invariants. The constraints ensure
that calls are made using valid parameters and that the program is in a sound state. A
constraint violation is an unrecoverable error.
Methods designed with a contract in mind (either explicitly enforced or just as a
design aid) will have clearer responsibilities and will be easier to understand. This, in
turn, simplifies testing.
The majority of languages don’t support contracts directly; rather, they use asser-
tions to achieve the effect of contract checking. Caution should be exercised in such
cases, because assertions don’t necessarily make it into production.
The big takeaway from this chapter is that designing program elements with contracts in mind helps give these elements clear responsibility and helps determine what
kinds of tests, and how many, we need in order to verify that a contract is indeed supported. Once a contract has been defined, we can verify it using secondary techniques
like unit testing or static analysis

# Kapitel 6:    Drivers of testability

    Direct input and output
    Indirect input and output
    Pure function and side efects
    Data types and testability
## Summary
Several constructs and behaviors in code affect testability. Direct input/output is
observable through a program element’s public interface. This makes testing easier,
because the tests need only be concerned about passing in interesting arguments and
checking the results, as opposed to looking at state changes and interactions with
other program elements.
Conversely, indirect input/output cannot be observed through the public inter-
face of a program element and requires tests to somehow intercept the values coming
in to and going out from the tested object. This usually moves tests away from state-
based testing to interaction-based testing.
The more complex state a program element allows, the more complex the tests
need to become. Therefore, keeping state both minimal and isolated leads to simpler
tests and less error-prone code.
Temporal coupling arises if one method requires another method to be invoked
first. Typical examples are initializer methods. Temporal coupling is actually state in
disguise and should therefore be avoided if possible.
The Domain-to-Range Ratio is a measure of information loss in functions that
map large input domains to small output domains, which may hide bugs. It’s yet
another tool when determining what abstractions to use and how many tests there
should be

# Kapitel 7: Unit testing.

why?: Enable scaling
      Lead to better design
        (save code from some of the folowing: Methods with too any parameters, Monster methods, Global state [in static classes and singeltons], excessive dependencies, Side effects)
      Enable change
      Prevent regresion
      Provide a steadey pace of work
      Free up time for testing
      Specify behaior and document the code
        Unit tests have the following properties:
                    They´re fully automated 
                    They´re self-verifiying 
                    they`re repeatable and consistent 
                    They test a single logical concept
                    They run in isolation 
                    They´re fast
A test is not a unit test if
- It talks to the database
- It communicates across the network
- It touches the file system
- It can’t run at the same time as any of your other unit tests
- You have to do special things to your environment (such as editing configuration files) to run in
Constructors and destructors

There are exceptions to every rule!

Naming tests
 - Behavior-driven developent style
Structuring tests - triplle A (Arrange. Act. Assert)

## Summary
Unit tests are created to
- Allow scaling
- Lead to better design
- Enable change
- Prevent regressions
- Provide a steady pace of work
- Free up time for testing
- Specify behavior and document the code
If code can be unit tested, it can’t be too poor. Some bad constructs will simply
not make it into the codebase if unit tests are in place. Ultimately, if a feature isn’t
testable, it won’t be tested.
Defining unit tests isn’t uncontroversial. In this book, unit tests are fully automated, self-verifying, repeatable, consistent, and fast. They test a single logical con-
cept and run in isolation.

There are three common naming standards for test methods:
- Mandated by the framework—Test names must start with a mandatory prefix.
Don't let it ruin them.
- BDD style—Test names should read like spoken sentences in the domain
language, and the program elements should do something.
- Unit of work, state under test, expected behavior—A solid template that con-
tains everything needed to accurately describe a test.

Using Arrange-Act-Assert protects from arbitrarily complex test methods and
gives all tests a similar structure.
Assertion methods provide a standardized way to express the outcome of a test.
In addition, the majority of the unit testing frameworks provide some kind of “assert
that,” which enables custom constraints and fluent assertions.
Forgetting to implement an equality method is a very common error, which pro -
duces confusing messages from assertEquals, Assert.AreEqual, or the like.
BDD-style frameworks are used for unit testing in some languages. They use
matchers instead of assertion methods and use a slightly different test structure in
comparison to xUnit frameworks

# Kapitel 8: Specification - Based testing techniques
' Software testing is by no means an exception'
Equvalence partitioning
Boundary value analysis (edge cases)
 (boundary in numbers, strings, colections)
 State transition testing
  (Apart from states and transitions, a state transition model also includes events
and actions)
## Summary: 
- Equivalence partitioning—Divide the input into partitions where each partition
 contains data that’s equivalent from the perspective of the test.
- Boundary value testing—Check the values at the edges of the partitions, as
well as common edge cases.
- State transition testing—Model the target of the test with a state diagram to
discover test scenarios
 - Testing based on decision tables—Capture all combinations of relevant vari-
ables to uncover missing and interesting test cases and to achieve full cover-
age if need be.

# Kapitel 9: Dependecies 
- relation betwen objects 
control indirect input: 
- Pass in the collaborating object
- Create a factory method 2 that can be overridden
- Provide an external factory or builder3

" I remind myself that the code has two clients: the system that runs in production and the test code"

 - system resource dependencies 
  Files 
    provide your own abstraction
    test the data handled by the O/I operation
 The system clock 
  pretty much every dependency can be solved by introducing an abstraction around it. 
  Depencies between layers 
   - layers never stack nicely on top of each other, as they would do in a design document
 Dependencies across a tires
## Summary
Various kinds of dependencies may make systems seem untestable. The trick is to rec-
ognize them and handle them in the right manner. This chapter speaks of four kinds
of dependencies:
- Between collaborating objects—These are the fundamental relations
between objects in an object-oriented program. This is where indirect input
and output become a challenge. The key to handling these dependencies is to
make them explicit. This can be done by injecting the collaborators directly
(using constructors or setters), using factory methods, or passing in builders
or factories.
- On system resources—These are simple dependencies on program elements
that abstract a system resource that produces some kind of side effect or
uncontrollable behavior. The canonical examples are files and the system
clock. When testing on a unit level, files are best handled by separating code
that performs the file I/O from code that works with the resulting data.
Classes that represent the system clock can be wrapped in another abstraction
that can be controlled. Please note that this is a generic method for handling
dependencies.
- Between layers—Most applications are layered. Each layer has responsibility
for some specific functionality, like presentation or business logic. Depen-
dencies between layers are just dependencies between program elements
and can be handled in the same way. Layers become challenging when they
are violated and bypassed. A good way of wiring layers together that often
ensures testability is using dependency inversion and a dependency injection
framework.
- Across tiers—Applications that are physically split across tiers live on differ-
ent machines. Dependencies between tiers tend to be more indirect and come
in the form of various network-related protocols and technologies. From the
programming point of view, the drivers and proxies are just abstractions.
However, such abstractions may have quirky interfaces and produce side
effects that aren’t desirable from a unit testing point of view and that can be
difficult even for some integration tests.

 - Working with dependencies can be emotional. Sometimes code has to be changed
to facilitate testability at the cost of increased complexity or a slight accessibility vio-
lation. This is seldom required in code written with testability in mind, but may be
the fastest, or only, way when working with older code.

# Kapitel 10
Data-driven and combinatorial testing.

