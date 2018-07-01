import * as React from 'react';
import {RouteComponentProps, withRouter} from "react-router-dom";
import Particles from 'react-particles-js';
import bg from './assets/bg-min.jpg';
import HomeVersionBComponent from './Home.inner-version-b.component';

export interface ComponentProps {}
class HomeVersionAComponent extends React.Component<ComponentProps & RouteComponentProps<any>> {
    render() {
        return (
            <span>
                <div className="Home-component__ver-a-box">
                    <HomeVersionBComponent />
                </div>
                <Particles params={config} className="Home-component__ver-a-particles" style={{backgroundImage: `url(${bg})`}}/>

            </span>
        )
    }
}

export default withRouter(HomeVersionAComponent);

const config = {
    'particles': {
        'number': {
            'value': 100,
            'density': {
                'enable': true,
                'value_area': 800
            }
        },
        'color': {
            'value': '#f6f6ff'
        },
        'shape': {
            'type': 'circle',
            'stroke': {
                'width': 0,
                'color': '#20b32d'
            },
            'polygon': {
                'nb_sides': 5
            },
            // 'image': {
            //     'src': logo,
            //     'width': 100,
            //     'height': 100
            // }
        },
        'opacity': {
            'value': 0.8,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 1,
                'opacity_min': 0.1,
                'sync': false
            }
        },
        'size': {
            'value': 7,
            'random': true,
            'anim': {
                'enable': false,
                'speed': 40,
                'size_min': 0.1,
                'sync': false
            }
        },
        'line_linked': {
            'enable': true,
            'distance': 150,
            'color': '#ffffff',
            'opacity': 0.4,
            'width': 1
        },
        'move': {
            'enable': true,
            'speed': 6,
            'direction': 'none',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
                'enable': false,
                'rotateX': 600,
                'rotateY': 1200
            }
        }
    },
    'retina_detect': true
};