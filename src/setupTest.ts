import "@testing-library/jest-dom";
import "jest-styled-components";
import "@testing-library/jest-dom/extend-expect";

import matchers from "@testing-library/jest-dom/matchers";
import { expect } from "vitest";

expect.extend(matchers);
