[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Scale

# Class: `abstract` Scale

Represents a musical scale.
A scale is a series of notes ordered by pitch or fundamental frequency.

## Extended by

- [`MajorScale`](MajorScale.md)
- [`NaturalMinorScale`](NaturalMinorScale.md)
- [`MajorPentatonicScale`](MajorPentatonicScale.md)
- [`MinorPentatonicScale`](MinorPentatonicScale.md)
- [`WholeToneScale`](WholeToneScale.md)

## Constructors

### new Scale()

> **new Scale**(`tonic`): [`Scale`](Scale.md)

Creates a new Scale instance.

#### Parameters

• **tonic**: [`PitchClass`](PitchClass.md)

The tonic (root note) of the scale.

#### Returns

[`Scale`](Scale.md)

#### Defined in

Scale.ts:15

## Methods

### getIntervals()

> `abstract` **getIntervals**(): [`Interval`](Interval.md)[]

Gets the intervals that define the scale.

#### Returns

[`Interval`](Interval.md)[]

An array of Intervals that define the scale.

#### Defined in

Scale.ts:23

***

### getName()

> `abstract` **getName**(): `string`

Gets the name of the scale.

#### Returns

`string`

A string representing the name of the scale.

#### Defined in

Scale.ts:53

***

### getPitchClasses()

> **getPitchClasses**(): [`PitchClass`](PitchClass.md)[]

Gets the pitch classes that make up the scale.

#### Returns

[`PitchClass`](PitchClass.md)[]

An array of PitchClass instances representing the scale.

#### Defined in

Scale.ts:37

***

### getTonic()

> **getTonic**(): [`PitchClass`](PitchClass.md)

Gets the tonic of the scale.

#### Returns

[`PitchClass`](PitchClass.md)

The PitchClass representing the tonic of the scale.

#### Defined in

Scale.ts:45
