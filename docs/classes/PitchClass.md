[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / PitchClass

# Class: PitchClass

Represents a pitch class in music theory.
A pitch class is an equivalence class of pitches under octave transposition.

## Constructors

### new PitchClass()

> **new PitchClass**(`name`): [`PitchClass`](PitchClass.md)

Creates a new PitchClass instance.

#### Parameters

• **name**: `string`

The name of the pitch class (e.g., 'C', 'F#', 'Bb').

#### Returns

[`PitchClass`](PitchClass.md)

#### Throws

If an invalid pitch name is provided.

#### Defined in

PitchClass.ts:19

## Methods

### equals()

> **equals**(`other`): `boolean`

Checks if this pitch class is equal to another.

#### Parameters

• **other**: [`PitchClass`](PitchClass.md)

The other PitchClass to compare.

#### Returns

`boolean`

True if the pitch classes are equal, false otherwise.

#### Defined in

PitchClass.ts:48

***

### getName()

> **getName**(`preferSharp`): `string`

Gets the name of the pitch class.

#### Parameters

• **preferSharp**: `boolean` = `true`

If true, prefers sharp notation; otherwise, uses flat notation.

#### Returns

`string`

The name of the pitch class.

#### Defined in

PitchClass.ts:39

***

### getSemitone()

> **getSemitone**(): `number`

Gets the semitone value of the pitch class.

#### Returns

`number`

The semitone value (0-11).

#### Defined in

PitchClass.ts:56

***

### transpose()

> **transpose**(`interval`): [`PitchClass`](PitchClass.md)

Transposes the pitch class by a given interval.

#### Parameters

• **interval**: [`Interval`](Interval.md)

The interval to transpose by.

#### Returns

[`PitchClass`](PitchClass.md)

A new PitchClass representing the transposed pitch.

#### Defined in

PitchClass.ts:74

***

### fromSemitone()

> `static` **fromSemitone**(`semitone`): [`PitchClass`](PitchClass.md)

Creates a PitchClass from a semitone value.

#### Parameters

• **semitone**: `number`

The semitone value (0-11).

#### Returns

[`PitchClass`](PitchClass.md)

A new PitchClass instance.

#### Defined in

PitchClass.ts:65
