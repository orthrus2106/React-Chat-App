import { useTranslation } from 'react-i18next';
import useActiveChannel from '../../hooks/useActiveChannel';
import { useGetMessagesQuery } from '../../store/api/apiSlice';

const ChatHeader = () => {
  const { t } = useTranslation();
  const { data: messages = [] } = useGetMessagesQuery();
  const { activeChannel } = useActiveChannel();
  return (
    <div className="bg-light mb-4 p-3 shadow-sm small">
      <p className="m-0">
        <b>
          #
          {activeChannel?.name}
        </b>
      </p>
      <span className="m-0">
        {messages?.filter((message) => message.channelId === activeChannel?.id).length}
        {' '}
        {t('ui.messages')}
      </span>
    </div>
  );
};

export default ChatHeader;
