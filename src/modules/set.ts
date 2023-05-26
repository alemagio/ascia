import { hash } from '../lib';

export class AsciaSet<TItem = unknown> {
  private set: Set<string>

  constructor(iterable?: TItem[] ) {
    this.set = new Set<string>(iterable?.map((item) => hash(item)))
  }

  add(value: any): this {
    this.set.add(hash(value))
    return this
  }

  clear(): void {
    this.set.clear()
  }

  delete(value: any): boolean {
    return this.set.delete(hash(value))
  }

  has(value: any): boolean {
    return this.set.has(hash(value))
  }

  get size(): number {
    return this.set.size
  }
}