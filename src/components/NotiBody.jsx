import SwitchCard from './SwitchCard';

const NotiBody = () => {
    return (
        <div className="ml-5">
            <h1 className="big-title mt-5 mb-3">Notification Settings</h1>
            <h1>We may send you important notifications about your account for flawless user experience</h1>
            <SwitchCard title="Queue Notification" description="Alert when your queue has reached: turn off if you do not want to be notified"/>
        </div>
    );
}

export default NotiBody; 