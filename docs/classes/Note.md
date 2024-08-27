[**Music Theory Library**](../README.md) • **Docs**

***

[Music Theory Library](../README.md) / Note

# Class: Note

Represents a musical note with a pitch and duration.

## Constructors

### new Note()

> **new Note**(`pitch`, `duration`, `velocity`): [`Note`](Note.md)

Creates a new Note instance.

#### Parameters

• **pitch**: [`Pitch`](Pitch.md)

The pitch of the note.

• **duration**: `number`

The duration of the note in beats.

• **velocity**: `number`

The velocity of the note (0-127).

#### Returns

[`Note`](Note.md)

#### Defined in

Note.ts:13

## Methods

### getDuration()

> **getDuration**(): `number`

Gets the duration of the note in beats.

#### Returns

`number`

The duration of the note in beats.

#### Defined in

Note.ts:38

***

### getPitch()

> **getPitch**(): [`Pitch`](Pitch.md)

Gets the pitch of the note.

#### Returns

[`Pitch`](Pitch.md)

The pitch of the note.

#### Defined in

Note.ts:30

***

### getVelocity()

> **getVelocity**(): `number`

Gets the velocity of the note (0-127).

#### Returns

`number`

The velocity of the note.

#### Defined in

Note.ts:46
