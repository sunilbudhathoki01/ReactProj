# React
used for web and native user interface
used to  build single page application
built by facebook and maintained by facebook
uses virtual dom for rendering

# virtual dom
light weight copy of real dom
whenever state changes:
React updates the virtual dom
compares with previous dom(diffing)
updates only the changed parts in the real dom(reconcilliation)
(faster rendering)
(better performance)

# components
ui block
reusable
functional component,class component
stateful component:state/ui can be updated
stateless:state can be updated but ui cannot be changed

# Hooks
special function
it enables us to make functional component stateful
using hooks,we can implement state management in functional component.

1.useEffect
1.useState
3.useRef
4.customHooks

# State
Object mutable(changable)
state changes/updated on user interaction,event trigger or API call
