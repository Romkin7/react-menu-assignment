import './App.css'
import menuConfig from './menuConfig';

function App() {
  

  return (
    <>
     <div>
        {menuConfig.map((menuItem) => {
          return (<div key={menuItem.title}>
            <div data-test-id={menuItem.title}>{menuItem.title}</div>
            {menuItem.subItems && menuItem.subItems.map((subItem) => {
              return (<button key={subItem} data-test-id={subItem}>{subItem}</button>)
            })}
          </div>)
        })}
     </div>
    </>
  )
}

export default App;
