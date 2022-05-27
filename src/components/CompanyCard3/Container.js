import { memo } from 'react';
import { Coin } from './Coin';
import {CompanyCard3} from "./SourceBox";
import { StatefulTargetBox as TargetBox } from './TargetBox';
import {makeStyles} from "@material-ui/core/styles";




export const Container = memo(function Container({G, item, key, playerID,children}) {

    
    return (<div style={{ overflow: 'hidden', clear: 'both', margin: '5rem' }}>
        <div style={{ float: 'left' }}>
        
                <CompanyCard3 item={item} style={{  width: "120px", height:"120px", borderRadius: "20px"}} >
                    {/*<Coin />*/}

                </CompanyCard3>
                
        </div>

        <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
            <TargetBox />
        </div>
    </div>);
});
