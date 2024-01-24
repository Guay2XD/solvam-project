async function enviarScript(scriptText){
	const lines = scriptText.split(/[\n\t]+/).map(line => line.trim()).filter(line => line);
	main = document.querySelector("#main"),
	textarea = main.querySelector(`div[contenteditable="true"]`)
	
	if(!textarea) throw new Error("Não há uma conversa aberta")
	
	for(const line of lines){
		console.log(line)
	
		textarea.focus();
		document.execCommand('insertText', false, line);
		textarea.dispatchEvent(new Event('change', {bubbles: true}));
	
		setTimeout(() => {
			(main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
		}, 100);
		
		if(lines.indexOf(line) !== lines.length - 1) await new Promise(resolve => setTimeout(resolve, 250));
	}
	
	return lines.length;
}

enviarScript(`
Lágrimas desordenadas
Canción de Melendi

Si mi corazón aún no se viste solo
Es porque no ha encontrao' a su medio limón
Lucha en los asaltos que manda la vida
Vive con cien gatos en un callejón
Y en el horizonte de mi pecho en llamas
Soy un Superman que busca tu cabina
El sujeto de quien no llora no mama
Una puta con horario de oficina
Y puse tus recuerdos a remojo
Y flotan porque el agua esta salada
Salada porque brotan de mis ojos
Lágrimas desordenadas
No pienses que estoy loco
Por vivir a mi manera
Voy a pasarme todo el día bebiendo
Y por la noche, pegado a una botella
Si mi corazón sigue de calavera
Es porque aun no ha aprendido a disimular
Cada vez que ve paseando tus caderas
Se le caen las llaves al fondo del bar
Y en el horizonte de mi pecho en llamas
Soy un Superman que busca tu cabina
El sujeto de quien no llora no mama
Una puta con horario de oficina
Y puse tus recuerdos a remojo
Y flotan porque el agua esta salada
Salada porque brotan de mis ojos
Lágrimas desordenadas
No pienses que estoy loco
Por vivir a mi manera
Voy a pasarme todo el día bebiendo
Y por la noche pegado a una botella
Y he plantao' un jardín de la alegría
Para hacer más divertidos mis días
Y he soñao' que dormía entre tus piernas
Y he dejao' el sueño patas arriba
Y puse tus recuerdos a remojo
Y flotan porque el agua esta salada
Salada porque brotan de mis ojos
Lágrimas desordenadas
No pienses que estoy loco
Por vivir a mi manera
Voy a pasarme todo el día bebiendo
Y por la noche pegado a una botella
Oh, sin ti
Y cuanto más vacía, más alta es la verja que salto pa' huir
Pegado a una botella, oh, sin ti
Y cuanto más vacía, más alta es la verja que salto pa' huir


`).then(e => console.log(`Código finalizado, ${e} mensagens enviadas`)).catch(console.error)