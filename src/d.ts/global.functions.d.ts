declare namespace glFunctions {
  interface global {
    test(): void;
    doGet(e): any;
    doPost(e): any;
  }
}

declare var global: glFunctions.global;
