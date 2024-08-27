[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / MinorPentatonicScale

# Class: MinorPentatonicScale

Represents a minor pentatonic scale in music.

## Extends

- [`Scale`](Scale.md)

## Constructors

### new MinorPentatonicScale()

> **new MinorPentatonicScale**(`tonic`): [`MinorPentatonicScale`](MinorPentatonicScale.md)

Creates a new Scale instance.

#### Parameters

• **tonic**: [`PitchClass`](PitchClass.md)

The tonic (root note) of the scale.

#### Returns

[`MinorPentatonicScale`](MinorPentatonicScale.md)

#### Inherited from

[`Scale`](Scale.md).[`constructor`](Scale.md#constructors)

#### Defined in

Scale.ts:15

## Methods

### getIntervals()

> **getIntervals**(): [`Interval`](Interval.md)[]

Gets the intervals that define the scale.

#### Returns

[`Interval`](Interval.md)[]

An array of Intervals that define the scale.

#### Overrides

[`Scale`](Scale.md).[`getIntervals`](Scale.md#getintervals)

#### Defined in

Scale.ts:118

***

### getName()

> **getName**(): `string`

Gets the name of the scale.

#### Returns

`string`

A string representing the name of the scale.

#### Overrides

[`Scale`](Scale.md).[`getName`](Scale.md#getname)

#### Defined in

Scale.ts:127

***

### getPitchClasses()

> **getPitchClasses**(): [`PitchClass`](PitchClass.md)[]

Gets the pitch classes that make up the scale.

#### Returns

[`PitchClass`](PitchClass.md)[]

An array of PitchClass instances representing the scale.

#### Inherited from

[`Scale`](Scale.md).[`getPitchClasses`](Scale.md#getpitchclasses)

#### Defined in

Scale.ts:37

***

### getTonic()

> **getTonic**(): [`PitchClass`](PitchClass.md)

Gets the tonic of the scale.

#### Returns

[`PitchClass`](PitchClass.md)

The PitchClass representing the tonic of the scale.

#### Inherited from

[`Scale`](Scale.md).[`getTonic`](Scale.md#gettonic)

#### Defined in

Scale.ts:45
