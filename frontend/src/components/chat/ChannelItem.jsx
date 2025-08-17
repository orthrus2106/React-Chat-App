import { ButtonGroup, Dropdown, Button } from 'react-bootstrap';

const ChannelItem = ({ channel, isActive, onSelect, onRename }) => {
    return (
        <Dropdown as={ButtonGroup} className='w-100'>
            <Button
                variant={isActive ? 'secondary' : 'light'}
                className='w-100 rounded-0 text-start'
                aria-current={isActive ?'true' : undefined}
                onClick={() => onSelect(channel.id)}  
            >
                <span className='me-1'>#</span>
                {channel.name}
            </Button>

            {channel.removable && (
                <>
                    <Dropdown.Toggle split variant={isActive ? 'secondary' : 'light'}/>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={onRename}>Переименовать</Dropdown.Item>
                         <Dropdown.Divider />
                         <Dropdown.Item>Удалить</Dropdown.Item>
                    </Dropdown.Menu>
                </>
            )}
        </Dropdown>
    )
}

export default ChannelItem