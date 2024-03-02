import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';

function Timeline() {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'var(--surface-c)', color: 'var(--text-color)', boxShadow: '0 3px 0 var(--surface-a)' }}
                contentArrowStyle={{ borderRight: '7px solid  var(--surface-c)' }}
                date="2023 - atualmente"
                iconStyle={{ background: 'var(--primary-color)', color: 'var(--text-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img width="40px" src="https://static.wixstatic.com/media/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png/v1/fit/w_2500,h_1330,al_c/01601d_aa1ff15d320a40a794ce1a1437b53468~mv2.png"/>}
            >
                <h3 className="vertical-timeline-element-title">Desenvolvimento de Sistemas</h3>
                <h4 className="vertical-timeline-element-subtitle">Etec Jaraguá</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'var(--surface-c)', color: 'var(--text-color)', boxShadow: '0 3px 0 var(--surface-a)' }}
                contentArrowStyle={{ borderRight: '7px solid  var(--surface-c)' }}
                date="2023 - atualmente"
                iconStyle={{ background: 'var(--primary-color)', color: 'var(--text-color)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                icon={<img width="45px" src="https://pbs.twimg.com/profile_images/1674853176833343518/cXvo8hle_400x400.jpg" style={{ mixBlendMode: "multiply", filter: 'brightness(125%)' }}/>}
            >
                <h3 className="vertical-timeline-element-title">Curso Profissionalizante</h3>
                <h4 className="vertical-timeline-element-subtitle">Saber</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    );
}

export default Timeline;