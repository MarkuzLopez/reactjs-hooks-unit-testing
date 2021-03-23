import { mount, shallow } from "enzyme"
import { HomeScreen } from "./HomeScreen"
import { UserContext } from "./UserContext"

describe('Pruebas unitarias HomeScreen', () => {
    
    // variables globales 

    const user= { 
        name: 'Eliza',
        email: 'eliza@garduno.com'
    }
    // mount para que renderice todo el component y no solo uno
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen />
        </UserContext.Provider>
    )

    test('debe mostrarse correctament con snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
})
