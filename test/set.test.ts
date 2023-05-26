import { expect, test } from 'vitest'
import { AsciaSet } from '../src'

test('should remove duplicates', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 2 }

  expect(new AsciaSet([obj1, obj2]).size).toBe(1)
  expect(new AsciaSet([obj1, obj2])).toEqual(new AsciaSet([obj1]))
})

test('should add item to set', t => {
  const obj1 = { a: 1, b: 2 }

  const set = new AsciaSet()
  set.add(obj1)

  expect(set.size).toBe(1)
  expect(set).toEqual(new AsciaSet([obj1]))

  // Add again does not change set
  set.add(obj1)

  expect(set.size).toBe(1)
  expect(set).toEqual(new AsciaSet([obj1]))
})

test('should clear set', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 2, b: 3, c: 4 }

  const set = new AsciaSet([obj1, obj2])
  set.clear()

  expect(set.size).toBe(0)
  expect(set).toEqual(new AsciaSet())
})

test('should delete item from set', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 3 }

  const set = new AsciaSet([obj1, obj2])

  set.delete(obj1)
  expect(set.size).toBe(1)
  expect(set).toEqual(new AsciaSet([obj2]))
})

test('has: should return true if contains object', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 3 }

  expect(new AsciaSet([obj1, obj2]).has(obj1)).toBe(true)
})

test('has: should return false if does not contain object', t => {
  const obj1 = { a: 1, b: 2 }
  const obj2 = { a: 1, b: 3 }

  expect(new AsciaSet([obj1, obj2]).has({ a: 1 })).toBe(false)
})
