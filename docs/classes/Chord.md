[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Chord

# Class: Chord

Represents a musical chord.
A chord is a harmonic set of pitches consisting of multiple notes sounded simultaneously.

## Constructors

### new Chord()

> **new Chord**(`root`, `quality`): [`Chord`](Chord.md)

Creates a new Chord instance.

#### Parameters

• **root**: [`PitchClass`](PitchClass.md)

The root note of the chord.

• **quality**: [`ChordQuality`](../enumerations/ChordQuality.md)

The quality of the chord (e.g., major, minor, diminished).

#### Returns

[`Chord`](Chord.md)

#### Defined in

Chord.ts:16

## Methods

### getName()

> **getName**(): `string`

Gets the name of the chord.

#### Returns

`string`

A string representation of the chord (e.g., "C", "Dm", "G7").

#### Defined in

Chord.ts:57

***

### getPitchClasses()

> **getPitchClasses**(): [`PitchClass`](PitchClass.md)[]

Gets all pitch classes that make up the chord.

#### Returns

[`PitchClass`](PitchClass.md)[]

An array of PitchClass instances representing the chord tones.

#### Defined in

Chord.ts:49

***

### getQuality()

> **getQuality**(): [`ChordQuality`](../enumerations/ChordQuality.md)

Gets the quality of the chord.

#### Returns

[`ChordQuality`](../enumerations/ChordQuality.md)

The ChordQuality of the chord.

#### Defined in

Chord.ts:41

***

### getRoot()

> **getRoot**(): [`PitchClass`](PitchClass.md)

Gets the root note of the chord.

#### Returns

[`PitchClass`](PitchClass.md)

The root PitchClass of the chord.

#### Defined in

Chord.ts:33
