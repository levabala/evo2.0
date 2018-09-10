// @flow
import Range from './Range';

const PROCESS_FUNCTIONS = {
  Lineral: function Lineral(value: number): number {
    return value;
  },
  Discret: function Discret(value: number): number {
    return Math.sign(value);
  },
  Sigmoid: function Sigmoid(value: number): number {
    return 1 / (1 + Math.exp(-value));
  },
  Tanh: function Tanh(value: number): number {
    return 2 / (1 + Math.exp(-2 * value)) - 1;
  },
  ReLu: function ReLu(value: number): number {
    return Math.max(0, value);
  },
  Lineral_OneLimited: function Lineral_OneLimited(value: number): number {
    return Range.MinusOneToOne.apply(value);
  },
  Discret_OneLimited: function Discret_OneLimited(value: number): number {
    return Range.MinusOneToOne.apply(Math.sign(value));
  },
  Sigmoid_OneLimited: function Sigmoid_OneLimited(value: number): number {
    return Range.MinusOneToOne.apply(1 / (1 + Math.exp(-value)));
  },
  Tanh_OneLimited: function Tanh_OneLimited(value: number): number {
    return Range.MinusOneToOne.apply(2 / (1 + Math.exp(-2 * value)) - 1);
  },
  ReLu_OneLimited: function ReLu_OneLimited(value: number): number {
    return Range.MinusOneToOne.apply(Math.max(0, value));
  },
};

export default PROCESS_FUNCTIONS;
