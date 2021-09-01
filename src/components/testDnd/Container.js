import { memo } from 'react';
import { SourceBox } from './SourceBox';
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { Colors } from './Colors';
export const Container = memo(function Container({G}) {
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
        <div style={{ float: 'left' }}>
            <SourceBox G={G}  color={Colors.BLUE}>
                <SourceBox G={G}  color={Colors.YELLOW}>
                    <SourceBox G={G}  color={Colors.YELLOW}/>
                    <SourceBox  G={G} color={Colors.BLUE}/>
                </SourceBox>
                <SourceBox G={G}  color={Colors.BLUE}>
                    <SourceBox  G={G} color={Colors.YELLOW}/>
                </SourceBox>
            </SourceBox>
        </div>

        <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
            <TargetBox />
        </div>
    </div>);
});
