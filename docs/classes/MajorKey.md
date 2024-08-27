[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / MajorKey

# Class: MajorKey

Represents a major key in music.

## Extends

- [`Key`](Key.md)

## Constructors

### new MajorKey()

> **new MajorKey**(`tonic`): [`MajorKey`](MajorKey.md)

Creates a new Key instance.

#### Parameters

• **tonic**: [`PitchClass`](PitchClass.md)

The tonic (root note) of the key.

#### Returns

[`MajorKey`](MajorKey.md)

#### Inherited from

[`Key`](Key.md).[`constructor`](Key.md#constructors)

#### Defined in

Key.ts:17

## Methods

### getDegreeChord()

> **getDegreeChord**(`degree`, `seventh`): [`Chord`](Chord.md)

Gets the chord for a specific scale degree in the major key.

#### Parameters

• **degree**: `number`

The scale degree (1-7).

• **seventh**: `boolean` = `false`

#### Returns

[`Chord`](Chord.md)

A Chord instance for the specified scale degree.

#### Throws

If an invalid scale degree is provided.

#### Overrides

[`Key`](Key.md).[`getDegreeChord`](Key.md#getdegreechord)

#### Defined in

Key.ts:108

***

### getDiatonicChords()

> **getDiatonicChords**(`seventh`): [`Chord`](Chord.md)[]

Gets all diatonic chords in the key.

#### Parameters

• **seventh**: `boolean` = `false`

#### Returns

[`Chord`](Chord.md)[]

An array of Chord instances representing the diatonic chords.

#### Inherited from

[`Key`](Key.md).[`getDiatonicChords`](Key.md#getdiatonicchords)

#### Defined in

Key.ts:72

***

### getKeySignature()

> **getKeySignature**(): `string`

Gets the key signature for this key.

#### Returns

`string`

A string representing the key signature (e.g., "b" for one flat, "###" for three sharps).

#### Inherited from

[`Key`](Key.md).[`getKeySignature`](Key.md#getkeysignature)

#### Defined in

Key.ts:54

***

### getScale()

> **getScale**(): [`Scale`](Scale.md)

Gets the scale of the key.

#### Returns

[`Scale`](Scale.md)

The Scale instance representing the scale of this key.

#### Inherited from

[`Key`](Key.md).[`getScale`](Key.md#getscale)

#### Defined in

Key.ts:31

***

### getTonic()

> **getTonic**(): [`PitchClass`](PitchClass.md)

Gets the tonic of the key.

#### Returns

[`PitchClass`](PitchClass.md)

The PitchClass representing the tonic of the key.

#### Inherited from

[`Key`](Key.md).[`getTonic`](Key.md#gettonic)

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

#### Inherited from

[`Key`](Key.md).[`isDiatonicChord`](Key.md#isdiatonicchord)

#### Defined in

Key.ts:81
