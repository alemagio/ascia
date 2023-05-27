import { expect, test } from 'vitest'
import { AsciaMap } from '../src'

test('should not have duplicate object keys', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  const map = new AsciaMap([[obj1, 1], [obj2, 2]])

  expect(map.size).toBe(1)
})

test('should delete item by key', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  const map = new AsciaMap([[obj1, 1]])
  map.delete(obj2)

  expect(map.size).toBe(0)
})

test('should return item by key', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  const map = new AsciaMap([[obj1, 1]])

  expect(map.get(obj2)).toBe(1)
})

test('has: should return true if contains key', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  const map = new AsciaMap([[obj1, 1]])

  expect(map.has(obj2)).toBe(true)
})

test('has: should return false if does not contain key', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 3 }

  const map = new AsciaMap([[obj1, 1]])

  expect(map.has(obj2)).toBe(false)
})

test('set: should set item in new key', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 3 }

  const map = new AsciaMap([[obj1, 1]])
  map.set(obj2, 2)

  expect(map.size).toBe(2)
})

test('set: should replace item', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  const map = new AsciaMap([[obj1, 1]])
  map.set(obj2, 2)

  expect(map.size).toBe(1)
  expect(map.get(obj1)).toBe(2)
  expect(map.get(obj2)).toBe(2)
})
