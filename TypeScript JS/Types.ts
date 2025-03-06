//Annotations : used to specify type of functions, variable and parameters
//Helps in catching errors in development

let num: number = 12
let user_name: string = "Aushin"
let isUser: boolean = true
let isFalse: any = true

function sum (x: number, y:number){ //Regular Function Parameter Annotation
    return x+y
}

const mul = (x: number, y: number) => { //Arrow Function Parameter Annotation
    return x*y
}

function print (x: number, y:number): string{ //Regular Function Return Annotation
    return "x+y"
}

const doNothing = (x: number, y: number): void => { //Arrow Function Return Annotation
    
}

// 1. Primitive Types
// These are the basic types in TypeScript:

// string → "hello"
// number → 42
// boolean → true / false
// bigint → BigInt(9007199254740991)
// symbol → Symbol('key')
// null → null
// undefined → undefined

// 2. Object Types
// These types allow complex structures:

// Object → { key: "value" }
// Array → number[] or Array<number>
// Tuple → [string, number]
// Enum → enum Role { ADMIN, USER }
// Class → class Person { name: string; }

// 3. Special Types
// any → Can hold any value (disables type checking).
// unknown → Like any but safer (type must be checked before use).
// never → Represents values that never occur (e.g., functions that throw errors).
// void → Represents functions that return nothing.

// 4. Function Types
// (a: number, b: number) => number → Defines a function signature.

// 5. Union & Intersection Types
// string | number (Union Type) → Can be either string or number.
// { name: string } & { age: number } (Intersection Type) → Must have both name and age.

// 6. Literal Types
// "success" | "error" → Can only be "success" or "error".