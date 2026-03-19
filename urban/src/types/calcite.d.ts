import { JSX as CalciteJSX } from "@esri/calcite-components";

declare global {
  namespace JSX {
    interface IntrinsicElements extends CalciteJSX.IntrinsicElements {}
  }
}