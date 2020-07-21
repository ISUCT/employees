import React from 'react';
import './index.css';

export default class UserItem extends React.Component {

    render() {
        return (
            <div className={'user-container'}>
                <div className={'user-inside-container'}>
                    <div className={'user-a'}>
                            <img
                                className={`user-img ${this.getContainerStyle()}`}
                                src={this.props.user.imgUrl || this.getImg()}
                                alt='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
                            />
                    </div>
                    <div className='user-info-container'>
                        <div className='user-info-fullname'>
                            { this.props.user.fullname || 'Not have info now' }
                        </div>
                        <div className='user-info-location'>
                            { this.props.user.location || 'Not have info now' }
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getContainerStyle = () => {
        return this.props.user.in ? '' : 'out-of-office';
    };

    getImg = () => 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';
}
