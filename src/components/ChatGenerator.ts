import { addDays, addMinutes } from 'date-fns'
import { Message } from './Models';

export function createMessages(numberOfMessages: number, participantsIds: any[] = []): Message[] {
    if (participantsIds.length < 1) {
        participantsIds = ['me', 'them'];
        // participantsIds = ['them'];
    }
    let currentDate = addDays(new Date(), -1);
    const messages: Message[] = [];

    for(let i=0; i< numberOfMessages; i++) {
        const randomParticipantId = getRandom(participantsIds);

        const message: Message = {
            id: currentDate.getTime().toString(),
            date: currentDate,
            attachments: [],
            text: createRandomMessage(),
            participantId: randomParticipantId
        };
        messages.push(message);
        currentDate = addMinutes(currentDate, 1);
    }

    return messages;
}

function createRandomMessage(): string {
    return getRandom(sentences);
}

function getRandom(array: any[]) {
    return array[Math.floor(Math.random() * array.length)]
}

const sentences= [
    'so fat not even Dora can explore her',
    'so  fat I swerved to miss her and ran out of gas',
    'so smelly she put on Right Guard and it went left',
    'so fat she hasn’t got cellulite, she’s got celluheavy',
    'so fat she don’t need no internet – she’s already world wide',
    'so hair her armpits look like Don King in a headlock',
    'so classless she could be a Marxist utopia',
    'so fat she can hear bacon cooking in Canada',
    'so fat she won “The Bachelor” because she all those other bitches',
    'so stupid she believes everything that Brian Williams says',
    'so ugly she scared off Flavor Flav',
    'is like Domino’s Pizza, one call does it all',
    'is twice the man you are',
    'is like Bazooka Joe, 5 cents a blow',
    'is like an ATM, open 24/7',
    'is like a championship ring, everybody puts a finger in her'
];