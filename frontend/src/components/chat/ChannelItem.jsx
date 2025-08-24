import { Dropdown, Button, ButtonGroup } from 'react-bootstrap'
import { useTranslation } from 'react-i18next'

const ChannelItem = ({
  channel, isActive, onSelect, onRename, onRemove,
}) => {
  const { t } = useTranslation()

  return (
    <li>
      <ButtonGroup className="w-100">
        <Button
          onClick={() => onSelect(channel.id)}
          variant={isActive ? 'primary' : 'white'}
          className="text-start w-100 rounded-start"
        >
          #
          {channel.name}
        </Button>
        {channel.removable && (
          <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle
              variant={isActive ? 'primary' : 'white'}
              className="rounded-end border-0 d-flex align-items-center justify-content-center"
              style={{ width: '38px', height: '38px' }}
              aria-label={t('buttons.channelControl')}
            >
              <i className="bi bi-gear" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={onRename}>{t('buttons.rename')}</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item onClick={onRemove}>{t('buttons.remove')}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        )}
      </ButtonGroup>
    </li>
  )
}

export default ChannelItem
