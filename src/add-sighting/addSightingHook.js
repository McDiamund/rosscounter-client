

    const uRossCounter = async function updateRossNumber(newNumber) {
        const newCount = { name: "rosscount", count: newNumber };

        const response = await fetch("http://localhost:5000/update-count", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newCount),
        })
        .catch(error => {
            return error;
        });

        return response;

    }

    
    const submitSighting = async (name, message, rcount) => {
        const newComment = { name: name, message: message, rossNumber: rcount  };
        
        await fetch("http://localhost:5000/add-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment),
        })
        .catch(error => {
            return error;
        })
    }
    
    const submit = async function onSubmit(name, message) {

        if (name.length === 0 && message.length === 0) {
            return "Please insert a name and a message";
        }
        else if (name.length === 0) {
            return "Please insert a name";
        } 
        else if (message.length === 0) {
            return "Please insert a message.";
        }
        
            const response = await fetch(`http://localhost:5000/count`);
            

            if (!response.ok) {
                const message = `An error occured: ${response.statusText}`;
                return message;
            }

            const rossCount = await response.json();
            
            const updateResponse = await uRossCounter((parseInt(rossCount.count)+1));

            if (updateResponse.message === 'Failed to fetch')
               return "This IP is blocked from posting for 15 minutes";
            submitSighting(name, message, (parseInt(rossCount.count)+ 1));
            return "Succeeded";

    }

    export default function AddSightingCalculations(n, m) {
        const response = submit(n,m);
        return response;

    }
    