import {User} from '../types'

interface Props {
    users: Array<User>
}

const List = ({ users }: Props) => {

    const renderList = (): JSX.Element[] => {
        return users.map(user => {
            return (
                <li key={user.name}>
                    <img src={user.avatar} alt='Avatar' />
                    <h4>{user.name} (<small>{user.months}</small>)</h4>
                    <p>{user.description?.substring(0, 100)}</p>
                </li>
            )
        })

    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}

export default List