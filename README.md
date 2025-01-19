# Unexpected Behavior with Loose Equality in JavaScript Null Checks

This repository demonstrates a common JavaScript bug related to loose equality (==) when checking for null or undefined values.

The `bug.js` file contains a function `foo` that attempts to handle null or undefined inputs. However, due to the use of loose equality, the function produces incorrect results.

The `bugSolution.js` file shows the corrected version using strict equality (===), which accurately handles null and undefined inputs.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory in your terminal.
3. Run `node bug.js` to see the unexpected behavior.
4. Run `node bugSolution.js` to see the corrected output.

## Conclusion

This example highlights the importance of using strict equality (===) in JavaScript when checking for null or undefined values to avoid unexpected behavior and ensure the accuracy of your code.