let emailData = {                                                                                               //object
        name: "gmail",
        mailboxes: {                                                                                            // key
            inbox: [
                {Sender: { name: 'Mike', email: 'Mike@gmail.com' },
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "Catching Up",
                 Body: "Good seeing you today!"
                },
            
                {Sender: { name: 'Jeff', email: 'Jeff@gucci.com' },                                             //is visible
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "RE:Working for the weekend",
                 Body: "Beach later, be there!"
                },
            
                {Sender: { name: 'Jon', email: 'Jon@apple.com' },
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "Sorry for the dealy",
                 Body: "Send the docs over."
                },
            
                {Sender: { name: 'Chris', email: 'Chris@gmail.com' },
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "Big news",
                 Body: "I'm moving!"
                },
            ],             // value/array
            junk: [
                {Sender: { name: 'Lenny', email: 'Lenny@toyota.com'},
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "I've got to tell you something!",
                 Body: "We've been trying to reach you about your cars warranty!"
                },
            ],
            drafts: [
                {Sender: { name: 'Deano', email: 'deano@gmail.com'},                                            //moved to sent
                 Recipient: { name: 'Lenny', email: 'Lenny@toyota.com'},
                 Subject: "RE:I've got to tell you something!",
                 Body: "I don't have a car"
                },
            ],
            sent: [
                {Sender: { name: 'Deano', email: 'deano@gmail.com'},
                 Recipient: {name: 'Mike', email: 'Mike@gmail.com'},
                 Subject: "Catching Up",
                 Body: "you too, Mike!"
                },
            ],
            spam: [
                {Sender: { name: 'Spamiam', email: 'spamcity@whoknoes.com'},
                 Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                 Subject: "You've Won!!!",
                 Body: "Claim this prize!"
                },
            ],
            archived: [                                                                                         //moved to drafts
                {Sender: { name: 'Mike', email: 'Mike@gmail.com' },
                Recipient: { name: 'Deano', email: 'deano@gmail.com'},
                Subject: "Sorry for the dealy",
                Body: "Send the docs over."
                },
            ] 
        },
        contacts: [ 
            {name: ['Mike', 'Jeff' ,'Lenny' ,'Jon' ,'Chris']},
            {email: ['Lenny@toyota.com','Jeff@gucci.com', 'Jon@apple.com', 'Chris@gmail.com', 'Mike@gmail.com']}
        ],
        emails: [
            'Lenny@toyota.com',
            'Jeff@gucci.com',
            'Jon@apple.com',
            'Chris@gmail.com',
            'Mike@gmail.com'
        ],
        labels: [
            'work',
            'friend',
            'family',
            'NA'
        ],

    family: {
        name: 'Mike', 
        email: 'Mike@gmail.com',
}
};

console.log(emailData);

for (let mailboxnames in emailData.mailboxes) {                                                                 //Get a list of mailbox names
    console.log(`Mailboxnames: ${mailboxnames}`);
    console.log(emailData.mailboxes[mailboxnames]);
    };

for (let emaillist in emailData.emails) {                                                                       //Get a list of emails
    console.log(`Emaillist: ${emaillist}`);
    console.log(emailData.emails[emaillist]);
}

    console.log(emailData.mailboxes.inbox[1]);                                                                  //Get the text of the second email in the visible list

while (emailData.mailboxes.drafts.length > 0) {                                                                 //Mark an email as sent
    emailData.mailboxes.sent.push(emailData.mailboxes.drafts.pop());
}
    console.log('sent', emailData.mailboxes.sent);

while (emailData.mailboxes.archived.length > 0) {                                                               //Add a draft email to the drafts mailbox
    emailData.mailboxes.drafts.push(emailData.mailboxes.archived.pop());
    }
    console.log('drafts', emailData.mailboxes.drafts)


                                                                                                                // {name: 'Mike', lastMessage: "Good seeing you today!"},
                                                                                                                // {name: 'Jeff', lastMessage: "Beach later, be there!"},
                                                                                                                // {name: 'Lenny', lastMessage: "We've been trying to reach you about your cars warranty!"},
                                                                                                                // {name: 'Jon', lastMessage: "Send the docs over."},
                                                                                                                // {name: 'Chris', lastMessage: "I'm moving."}, 