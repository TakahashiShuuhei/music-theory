[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Interval

# Class: Interval

Represents a musical interval.
An interval is the difference in pitch between two sounds.

## Constructors

### new Interval()

> **new Interval**(`semitones`): [`Interval`](Interval.md)

Creates a new Interval instance.

#### Parameters

• **semitones**: `number`

The number of semitones in the interval.

#### Returns

[`Interval`](Interval.md)

#### Defined in

Interval.ts:14

## Properties

### MAJOR\_SECOND

> `static` **MAJOR\_SECOND**: [`Interval`](Interval.md)

Major second interval (2 semitones)

#### Defined in

Interval.ts:79

***

### MAJOR\_SEVENTH

> `static` **MAJOR\_SEVENTH**: [`Interval`](Interval.md)

Major seventh interval (11 semitones)

#### Defined in

Interval.ts:97

***

### MAJOR\_SIXTH

> `static` **MAJOR\_SIXTH**: [`Interval`](Interval.md)

Major sixth interval (9 semitones)

#### Defined in

Interval.ts:93

***

### MAJOR\_THIRD

> `static` **MAJOR\_THIRD**: [`Interval`](Interval.md)

Major third interval (4 semitones)

#### Defined in

Interval.ts:83

***

### MINOR\_SECOND

> `static` **MINOR\_SECOND**: [`Interval`](Interval.md)

Minor second interval (1 semitone)

#### Defined in

Interval.ts:77

***

### MINOR\_SEVENTH

> `static` **MINOR\_SEVENTH**: [`Interval`](Interval.md)

Minor seventh interval (10 semitones)

#### Defined in

Interval.ts:95

***

### MINOR\_SIXTH

> `static` **MINOR\_SIXTH**: [`Interval`](Interval.md)

Minor sixth interval (8 semitones)

#### Defined in

Interval.ts:91

***

### MINOR\_THIRD

> `static` **MINOR\_THIRD**: [`Interval`](Interval.md)

Minor third interval (3 semitones)

#### Defined in

Interval.ts:81

***

### PERFECT\_FIFTH

> `static` **PERFECT\_FIFTH**: [`Interval`](Interval.md)

Perfect fifth interval (7 semitones)

#### Defined in

Interval.ts:89

***

### PERFECT\_FOURTH

> `static` **PERFECT\_FOURTH**: [`Interval`](Interval.md)

Perfect fourth interval (5 semitones)

#### Defined in

Interval.ts:85

***

### PERFECT\_OCTAVE

> `static` **PERFECT\_OCTAVE**: [`Interval`](Interval.md)

Perfect octave interval (12 semitones)

#### Defined in

Interval.ts:99

***

### PERFECT\_UNISON

> `static` **PERFECT\_UNISON**: [`Interval`](Interval.md)

Perfect unison interval (0 semitones)

#### Defined in

Interval.ts:75

***

### TRITONE

> `static` **TRITONE**: [`Interval`](Interval.md)

Tritone interval (6 semitones)

#### Defined in

Interval.ts:87

## Methods

### apply()

> **apply**(`pitchClass`): [`PitchClass`](PitchClass.md)

Applies the interval to a given pitch class.

#### Parameters

• **pitchClass**: [`PitchClass`](PitchClass.md)

The PitchClass to apply the interval to.

#### Returns

[`PitchClass`](PitchClass.md)

A new PitchClass resulting from applying the interval.

#### Defined in

Interval.ts:61

***

### getName()

> **getName**(): `string`

Gets the name of the interval.

#### Returns

`string`

A string representing the interval name.

#### Defined in

Interval.ts:30

***

### getSemitones()

> **getSemitones**(): `number`

Gets the number of semitones in the interval.

#### Returns

`number`

The number of semitones.

#### Defined in

Interval.ts:22

***

### invert()

> **invert**(): [`Interval`](Interval.md)

Inverts the interval.

#### Returns

[`Interval`](Interval.md)

A new Interval that is the inversion of this interval.

#### Defined in

Interval.ts:69

***

### fromName()

> `static` **fromName**(`name`): [`Interval`](Interval.md)

Creates an Interval instance from a name.

#### Parameters

• **name**: `string`

The name of the interval.

#### Returns

[`Interval`](Interval.md)

A new Interval instance.

#### Throws

If an invalid interval name is provided.

#### Defined in

Interval.ts:44
