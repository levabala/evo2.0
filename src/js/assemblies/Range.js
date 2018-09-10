class Range {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }

  apply(value) {
    if (this.from >= value) return this.from;
    if (this.to <= value) return this.to;
    return value;
  }

  isIn(value, include = false) {
    return (
      !(include && !(this.from <= value && this.to >= value)) &&
      !(!include && !(this.from < value && this.to > value))
    );
  }

  generateNumber() {
    return Math.random() * (this.to - this.from) + this.from;
  }
}

Range.ZeroToOne = new Range(0, 1);
Range.MinusOneToOne = new Range(-1, 1);

export default Range;
