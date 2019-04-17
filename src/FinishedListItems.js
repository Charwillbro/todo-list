import React, {Component} from 'react';

import ListItem from './ListItem';

class FinishedListItems extends Component {
    render() {
        const {finishedListItems, onClick, removeItem} = this.props;

        return (
            <div className="finished-list-items">
                {
                    finishedListItems.map((item) =>
                        <ListItem
                            item={item}
                            isActive={false}
                            key={item}
                            onClick={onClick}
                            removeItem={removeItem}
                        />
                    )
                }
            </div>
        );
    }
}

export default FinishedListItems;
