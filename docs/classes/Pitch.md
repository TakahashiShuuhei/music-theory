[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Pitch

# Class: Pitch

Represents a specific pitch in music, combining a pitch class with an octave.

## Constructors

### new Pitch()

> **new Pitch**(`pitchClass`, `octave`): [`Pitch`](Pitch.md)

Creates a new Pitch instance.

#### Parameters

• **pitchClass**: [`PitchClass`](PitchClass.md)

The pitch class of the pitch.

• **octave**: `number`

The octave of the pitch (-1 to 9).

#### Returns

[`Pitch`](Pitch.md)

#### Throws

If an invalid octave is provided.

#### Defined in

Pitch.ts:13

## Methods

### getFrequency()

> **getFrequency**(): `number`

Gets the frequency of the pitch.

#### Returns

`number`

The frequency of the pitch in Hz.

#### Defined in

Pitch.ts:48

***

### getMidiNoteNumber()

> **getMidiNoteNumber**(): `number`

Gets the MIDI note number of the pitch.

#### Returns

`number`

The MIDI note number.

#### Defined in

Pitch.ts:39

***

### getOctave()

> **getOctave**(): `number`

Gets the octave of the pitch.

#### Returns

`number`

The octave of the pitch.

#### Defined in

Pitch.ts:31

***

### getPitchClass()

> **getPitchClass**(): [`PitchClass`](PitchClass.md)

Gets the pitch class of the pitch.

#### Returns

[`PitchClass`](PitchClass.md)

The PitchClass of the pitch.

#### Defined in

Pitch.ts:23

***

### getScientificNotation()

> **getScientificNotation**(): `string`

Gets the scientific pitch notation of the pitch.

#### Returns

`string`

A string representing the pitch in scientific pitch notation (e.g., "C4" for middle C).

#### Defined in

Pitch.ts:56
