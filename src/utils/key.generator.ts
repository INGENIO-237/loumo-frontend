import { v4 } from "uuid";

export default function getKey() {
  return v4().toString();
}
