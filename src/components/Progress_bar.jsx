import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {
	
	
    const Parentdiv1 = {
		height: height,
		width: '80%',
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
		margin: 50,
        paddingDown: 50
	}
    
    const Parentdiv = {
		height: height,
		width: '80%',
		backgroundColor: 'whitesmoke',
		borderRadius: 5,
		margin: 50
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:5,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
        
	<div style={Parentdiv}>
	<div style={Childdiv}>

	</div>
	</div>
	)
}

export default Progress_bar;
