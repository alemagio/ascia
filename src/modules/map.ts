import { hash } from '../lib';

export class AsciaMap<TKey = object, TItem = unknown> {
  private map: Map<string, TItem>

  constructor(entries?: readonly (readonly [TKey, TItem])[] | null) {
    this.map = new Map<string, TItem>(entries?.map(([key, value]) => [hash(key), value]))
  }

  clear(): void {
    this.map.clear()
  }

  delete(key: TKey): boolean {
    return this.map.delete(hash(key))
  }

  get(key: TKey): TItem | undefined {
    return this.map.get(hash(key))
  }

  has(key: TKey): boolean {
    return this.map.has(hash(key))
  }

  set(key: TKey, value: TItem): this {
    this.map.set(hash(key), value)
    return this
  }

  get size(): number {
    return this.map.size
  }
}