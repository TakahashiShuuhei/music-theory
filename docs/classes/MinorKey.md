[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / MinorKey

# Class: MinorKey

Represents a minor key in music.

## Extends

- [`Key`](Key.md)

## Constructors

### new MinorKey()

> **new MinorKey**(`tonic`): [`MinorKey`](MinorKey.md)

Creates a new Key instance.

#### Parameters

• **tonic**: [`PitchClass`](PitchClass.md)

The tonic (root note) of the key.

#### Returns

[`MinorKey`](MinorKey.md)

#### Inherited from

[`Key`](Key.md).[`constructor`](Key.md#constructors)

#### Defined in

Key.ts:17

## Methods

### getDegreeChord()

> **getDegreeChord**(`degree`, `seventh`): [`Chord`](Chord.md)

Gets the chord for a specific scale degree in the minor key.

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

Key.ts:160

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

Gets the key signature for this minor key.

#### Returns

`string`

A string representing the key signature.

#### Overrides

[`Key`](Key.md).[`getKeySignature`](Key.md#getkeysignature)

#### Defined in

Key.ts:201

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
