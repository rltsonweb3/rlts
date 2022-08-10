import React from 'react';
import Select from 'react-select'
import ColumnNew from '../components/ColumnNew';
import {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.sticky.white {
    background: #403f83;
    border-bottom: solid 1px #403f83;
  }

  header#myHeader.navbar .search #quick_search {
    color: #fff;
    background: rgba(255, 255, 255, .1);
  }

  header#myHeader.navbar.white .btn, .navbar.white a, .navbar.sticky.white a {
    color: #fff;
  }

  header#myHeader .dropdown-toggle::after {
    color: rgba(255, 255, 255, .5);;
  }

  header#myHeader .logo .d-block {
    display: none !important;
  }

  header#myHeader .logo .d-none {
    display: block !important;
  }

  @media only screen and (max-width: 1199px) {
    .navbar {
      background: #403f83;
    }

    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2 {
      background: #fff;
    }

    .item-dropdown .dropdown a {
      color: #fff !important;
    }
  }
`;

const customStyles = {
    option: (base, state) => ({
        ...base,
        background: "#fff",
        color: "#333",
        borderRadius: state.isFocused ? "0" : 0,
        "&:hover": {
            background: "#eee",
        }
    }),
    menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0
    }),
    menuList: base => ({
        ...base,
        padding: 0
    }),
    control: (base, state) => ({
        ...base,
        padding: 2
    })
};


const options = [
    {value: 'All categories', label: 'All '},
    {value: '{"en":"Critically Endangered"}', label:'Critically Endangered (9065)' },
    {value:  '{"en":"Data Deficient"}', label:'Data Deficient (20469)'},
    {value: '{"en":"Endangered"}', label: 'Endangered (16094)'},
    {value:  '{"en":"Extinct In The Wild"}', label:'Extinct In The Wild (82)'},
    {value:  '{"en":"Extinct"}', label:'Extinct (902)'},
    {value:  '{"en":"Lower Risk: Conservation Dependent"}', label:'Lower Risk (158)'},
    {value:  '{"en":"Vulnerable"}', label:'Vulnerable (16300)'},
    {value:  '{"en":"Near Threatened"}', label:'Near Threatened (8714)'},
]

const DataExplore = () => (
    <div >
        <GlobalStyles/>
        <section className='container' style={{margin:"0",padding:"0"}}>
            <div className='row'>
                <div className='col-lg-12'>
                    <div className="items_filter">
                        <div className='dropdownSelect one'><Select styles={customStyles}
                                                                    menuContainerStyle={{'zIndex': 999}}
                                                                    defaultValue={options[0]} options={options}/></div>
                    </div>
                </div>
            </div>
            <ColumnNew/>
        </section>


    </div>

);
export default DataExplore;
