import { AvatarOptions } from "../Avatar/Avatar";
import { Attachment } from "../Models";

export interface MessageProps {
  id: string,
  date: string | Date;
  bgColor?: string,
  textColor?: string,
  position: 'left' | 'right',
  avatarOptions: AvatarExtend,
  actions: ActionProps[],
  attachments: Attachment[],
  onMessageActionClick?: (e: OnMessageActionClick) => void,
  onMessageAttachmentClick?: (e: OnAttachmentClick) => void
}

export interface ActionProps {
  id?: string,
  text?: string,
  icon?: any,
  showInline?: boolean
}

export interface AvatarExtend extends AvatarOptions {
    visibility?: 'visible' | 'hidden' | 'gone'
}

interface OnMessageActionClick {
    message: MessageProps,
    action: ActionProps
}

export interface ChatMessageActionComponentProps {
    actions: ActionProps[],
    onActionClick?: (e: ActionProps) => void
}

export interface ChatMessageActionComponentState {
    popupVisible: boolean
}

export interface ChatMessageAttachmentsProps {
  attachments: Attachment[],
  onAttachmentClick?: (e: Attachment) => void
}

interface OnAttachmentClick {
  message: MessageProps,
  attachment: Attachment
}