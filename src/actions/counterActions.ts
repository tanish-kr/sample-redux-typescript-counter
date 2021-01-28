export function increment() {
  return { type: "INCREMENT" };
}

export function decrement() {
  return { type: "DECREMENT" };
}

export default interface counterAction {
  type: string;
}
