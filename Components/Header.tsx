
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faGlobeAmericas, faExclamation, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { Icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { IContacts, IHeader } from './IHeader';

const iconMap = {
    email: faEnvelope,
    phone: faPhone,
    location: faMapMarkerAlt,
    website: faGlobeAmericas,
    linkedin: faLinkedin,
    github: faGithub,
    twitter: faTwitter
};

function ContactList(props: { items: IContacts[] }) {
    return (
        <div className={''}>
            {props.items.map((item, index) => {
                const icon = (iconMap as Record<string, IconDefinition | undefined>)[item.type] || faExclamation;
                return (
                    <div className={'p-5'} key={index}>
                        <a className={''} href={item.link} target='_blank'>
                            <FontAwesomeIcon icon={icon} width={20} /> 
                        </a>
                    </div>
                )
            })}
        </div>
    )
}



export default function Header(props: IHeader) {
    const imageStyle = {
        borderRadius: '50%',
        border: '1px solid rgba(255, 2555, 255, 0.15)',
    }
    return (
        <div className='flex items-center'>
            <div className='p-12'>
                <Image
                    src={props.image}
                    width={256}
                    height={256}
                    alt={'My photo'}
                    style={imageStyle}
                />
            </div>

            <div className={' items-center p-6'}>
                <div className={'text-white text-4xl font-bold'}>{props.name}</div>
                <div className={'text-white text-sm'}>{props.title}</div>
                <div className={'text-teal-500 text-sm'}>{props.description}</div>
            </div>
            <div className={'flex '}>
                    <ContactList
                        items={props.contacts}
                    />
            </div>
        </div>
    );
}
