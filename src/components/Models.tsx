import { AvatarExtend } from "./Message/Types";

export interface Message {
  id?: string;
  text: string;
  date: string | Date;
  attachments: Attachment[];
  participantId?: string; 
}

export interface Attachment {
  name?: string,
  description?: string,
  url?: string,
  displayAsImg?: boolean
}

export interface Participant {
  id: string,
  name: string,
  showInTitle: boolean,
  messageOptions?: ParticipantMessageOptions,
  avatarOptions?: AvatarExtend
}

export interface ParticipantMessageOptions {
  position: 'left' | 'right';
  textColor: string;
  bgColor: string;
}

