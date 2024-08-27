[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Key

# Class: `abstract` Key

Represents a musical key.
A key is a group of pitches, or scale upon which a music composition is created in classical, Western art, and Western pop music.

## Extended by

- [`MajorKey`](MajorKey.md)
- [`MinorKey`](MinorKey.md)

## Constructors

### new Key()

> **new Key**(`tonic`): [`Key`](Key.md)

Creates a new Key instance.

#### Parameters

• **tonic**: [`PitchClass`](PitchClass.md)

The tonic (root note) of the key.

#### Returns

[`Key`](Key.md)

#### Defined in

Key.ts:17

## Methods

### getDegreeChord()

> `abstract` **getDegreeChord**(`degree`, `seventh`): [`Chord`](Chord.md)

Gets the chord for a specific scale degree.

#### Parameters

• **degree**: `number`

The scale degree (1-7).

• **seventh**: `boolean`

#### Returns

[`Chord`](Chord.md)

A Chord instance for the specified scale degree.

#### Defined in

Key.ts:40

***

### getDiatonicChords()

> **getDiatonicChords**(`seventh`): [`Chord`](Chord.md)[]

Gets all diatonic chords in the key.

#### Parameters

• **seventh**: `boolean` = `false`

#### Returns

[`Chord`](Chord.md)[]

An array of Chord instances representing the diatonic chords.

#### Defined in

Key.ts:72

***

### getKeySignature()

> **getKeySignature**(): `string`

Gets the key signature for this key.

#### Returns

`string`

A string representing the key signature (e.g., "b" for one flat, "###" for three sharps).

#### Defined in

Key.ts:54

***

### getScale()

> **getScale**(): [`Scale`](Scale.md)

Gets the scale of the key.

#### Returns

[`Scale`](Scale.md)

The Scale instance representing the scale of this key.

#### Defined in

Key.ts:31

***

### getTonic()

> **getTonic**(): [`PitchClass`](PitchClass.md)

Gets the tonic of the key.

#### Returns

[`PitchClass`](PitchClass.md)

The PitchClass representing the tonic of the key.

#### Defined in

Key.ts:46

***

### isDiatonicChord()

> **isDiatonicChord**(`chord`): `boolean`

Checks if a given chord is diatonic to the key.

#### Parameters

• **chord**: [`Chord`](Chord.md)

The chord to check.

#### Returns

`boolean`

True if the chord is diatonic to the key, false otherwise.

#### Defined in

Key.ts:81
