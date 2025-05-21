        const questions = [
            {
                id: 'initial',
                text: 'Are you currently in possession of a firearm?',
                options: [
                    { text: 'Yes', next: 'firearm_registered' },
                    { text: 'No', next: 'planning_to_acquire' }
                ]
            },
            {
                id: 'firearm_registered',
                text: 'Is your firearm registered?',
                options: [
                    { text: 'Yes', next: 'license_valid' },
                    { text: 'No', next: 'type_of_unregistered_firearm' }
                ]
            },
            {
                id: 'license_valid',
                text: 'Is your firearm license valid and up-to-date?',
                options: [
                    { text: 'Yes', next: 'carry_outside' },
                    { text: 'No', next: 'expired_license' }
                ]
            },
            {
                id: 'carry_outside',
                text: 'Do you carry your firearm outside your residence?',
                options: [
                    { text: 'Yes', next: 'carry_permit' },
                    { text: 'No', next: 'firearm_compliance' }
                ]
            },
            {
                id: 'carry_permit',
                text: 'Do you have a valid permit to carry your firearm outside your residence?',
                options: [
                    { text: 'Yes', next: 'firearm_compliance' },
                    { text: 'No', next: 'no_carry_permit' }
                ]
            },
            {
                id: 'planning_to_acquire',
                text: 'Are you planning to acquire a firearm?',
                options: [
                    { text: 'Yes', next: 'check_qualifications' },
                    { text: 'No', next: 'firearm_compliance' }
                ]
            },
            {
                id: 'check_qualifications',
                text: 'Do you meet the following qualifications?\n- Filipino citizen\n- At least 21 years old\n- Have gainful work/occupation/business/filed ITR\n- No conviction of crime involving moral turpitude\n- Passed psychiatric test\n- Passed drug test\n- Passed gun safety seminar',
                options: [
                    { text: 'Yes, I meet all requirements', next: 'firearm_type_interest' },
                    { text: 'No, I don\'t meet all requirements', next: 'not_qualified' }
                ]
            },
            {
                id: 'firearm_type_interest',
                text: 'What type of firearm are you interested in acquiring?',
                options: [
                    { text: 'Small arm (handgun, rifle, shotgun)', next: 'license_type_interest' },
                    { text: 'Light weapon (Class-A)', next: 'light_weapon_a' },
                    { text: 'Light weapon (Class-B)', next: 'light_weapon_b' }
                ]
            },
            {
                id: 'license_type_interest',
                text: 'What type of license are you interested in?',
                options: [
                    { text: 'Type 1 (max 2 firearms)', next: 'license_requirements' },
                    { text: 'Type 2 (max 5 firearms)', next: 'license_requirements' },
                    { text: 'Type 3 (max 10 firearms)', next: 'license_requirements' },
                    { text: 'Type 4 (max 15 firearms)', next: 'license_requirements' },
                    { text: 'Type 5 (certified collector, more than 15)', next: 'license_requirements' }
                ]
            },
            {
                id: 'license_requirements',
                text: 'For Types 1-5 licenses, you need a vault or secure container. For Types 3-5, you must comply with inspection and bond requirements. Do you understand and can meet these requirements?',
                options: [
                    { text: 'Yes', next: 'firearm_compliance' },
                    { text: 'No', next: 'not_qualified' }
                ]
            },
            {
                id: 'type_of_unregistered_firearm',
                text: 'What type of unregistered firearm do you possess?',
                options: [
                    { text: 'Small arm (handgun, rifle, shotgun)', next: 'quantity_small_arms' },
                    { text: 'Light weapon (Class-A)', next: 'unlawful_class_a' },
                    { text: 'Light weapon (Class-B)', next: 'unlawful_class_b' },
                    { text: 'Major part of firearm only', next: 'major_part_type' }
                ]
            },
			{
				id: 'type_of_unregistered_firearm',
				text: 'What unregistered item do you possess?', // Changed text slightly for clarity
				options: [
					{ text: 'Small arm (handgun, rifle, shotgun)', next: 'quantity_small_arms' },
					{ text: 'Light weapon (Class-A)', next: 'unlawful_class_a' },
					{ text: 'Light weapon (Class-B)', next: 'unlawful_class_b' },
					{ text: 'Major part of firearm only', next: 'major_part_type' },
					{ text: 'Ammunition only', next: 'type_of_ammunition' } // New option
				]
			},
			{
				id: 'type_of_ammunition',
				text: 'What type of ammunition do you unlawfully possess (without the corresponding firearm)?',
				options: [
					{ text: 'Ammunition for a small arm', next: 'unlawful_ammo_small_arm_result' }, // [cite: 161]
					{ text: 'Ammunition for a Class-A light weapon', next: 'unlawful_ammo_class_a_result' }, // [cite: 164]
					{ text: 'Ammunition for a Class-B light weapon', next: 'unlawful_ammo_class_b_result' } // [cite: 167]
				]
			},
            {
                id: 'quantity_small_arms',
                text: 'How many unregistered small arms do you possess?',
                options: [
                    { text: '1-2 small arms', next: 'small_arm_condition' },
                    { text: '3 or more small arms', next: 'multiple_small_arms' }
                ]
            },
            {
                id: 'small_arm_condition',
                text: 'Is your unregistered small arm in any of these conditions?',
                options: [
                    { text: 'Loaded with ammunition', next: 'aggravated_small_arm' },
                    { text: 'Fitted with laser/thermal weapon sight', next: 'aggravated_small_arm' },
                    { text: 'Fitted with silencer/muffler', next: 'aggravated_small_arm' },
                    { text: 'Has extra barrel', next: 'aggravated_small_arm' },
                    { text: 'Converted to full automatic', next: 'aggravated_small_arm' },
                    { text: 'None of the above', next: 'simple_small_arm' }
                ]
            },
            {
                id: 'major_part_type',
                text: 'What type of major firearm part do you possess?',
                options: [
                    { text: 'Major part of small arm', next: 'major_part_small_arm' },
                    { text: 'Major part of Class-A light weapon', next: 'major_part_class_a' },
                    { text: 'Major part of Class-B light weapon', next: 'major_part_class_b' }
                ]
            },
            {
                id: 'expired_license',
                text: 'Has your license been expired for more than six months?',
                options: [
                    { text: 'Yes', next: 'expired_more_than_six' },
                    { text: 'No', next: 'expired_less_than_six' }
                ]
            },
            {
                id: 'expired_more_than_six',
                text: 'Has your license expired on two or more occasions without renewal?',
                options: [
                    { text: 'Yes', next: 'multiple_expiry' },
                    { text: 'No', next: 'single_expiry' }
                ]
            },
            {
                id: 'light_weapon_a',
                text: 'Did you previously have a license for a Class-A light weapon before the effectivity of RA 10591?',
                options: [
                    { text: 'Yes', next: 'previous_license_class_a' },
                    { text: 'No', next: 'unauthorized_class_a' }
                ]
            },
            {
                id: 'light_weapon_b',
                text: 'Are you a member of the AFP, PNP, or other authorized law enforcement agency?',
                options: [
                    { text: 'Yes', next: 'firearm_compliance' },
                    { text: 'No', next: 'unauthorized_class_b' }
                ]
            },
			{
				id: 'loose_firearm_possessed', // Assume this state is reached after determining possession of a loose firearm
				text: 'Was this loose firearm used in the commission of a crime (punishable under the Revised Penal Code or other special laws)?',
				options: [
					{ text: 'Yes', next: 'loose_firearm_use_details' },
					{ text: 'No (possession is the only issue)', next: 'determine_loose_firearm_penalty_only' } // Leads to existing Section 28 penalties
				]
			},
			{
				id: 'loose_firearm_use_details',
				text: 'Regarding the crime committed with the loose firearm: Is the use of the firearm inherent in the commission of that crime?',
				options: [
					{ text: 'Yes, it is inherent', next: 'result_sec29_aggravating' },
					{ text: 'No, it is not inherent', next: 'loose_firearm_penalty_comparison' }
				]
			},
			{
				id: 'loose_firearm_penalty_comparison',
				text: 'Is the maximum penalty for the crime committed with the loose firearm LOWER than the penalty for illegal possession of that firearm under Section 28?',
				// Note: This requires knowing the Sec 28 penalty for the specific firearm, which the system would have determined.
				options: [
					{ text: 'Yes, penalty for other crime is lower', next: 'result_sec29_penalty_override' },
					{ text: 'No, penalty for other crime is higher or equal', next: 'loose_firearm_penalty_comparison_equal' }
				]
			},
			{
				id: 'loose_firearm_penalty_comparison_equal',
				text: 'Is the maximum penalty for the crime committed with the loose firearm EQUAL to the penalty for illegal possession of that firearm under Section 28?',
				options: [
					{ text: 'Yes, penalties are equal', next: 'result_sec29_penalty_additional' },
					{ text: 'No, penalty for other crime is higher', next: 'result_sec29_aggravating_or_separate' } // Further logic needed here
				]
			},
        ]; // [cite: 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

        const resultsData = {
            'firearm_compliance': {
                title: 'Compliant with RA 10591',
                description: 'Based on your responses, you appear to be in compliance with the requirements of RA 10591. Continue to follow proper firearm registration and licensing procedures.',
                penalty: 'None - You are in compliance with the law.',
                section: 'N/A',
                details: 'You have indicated that you are following the legal requirements for firearm ownership as established by the Comprehensive Firearms and Ammunition Regulation Act. Remember to renew your license every two years and firearm registration every four years to maintain compliance.'
            }, // [cite: 20, 21]
            'simple_small_arm': {
                title: 'Unlawful Possession of Small Arm',
                description: 'You are in possession of an unregistered small arm.',
                penalty: 'Prision mayor in its medium period (8 years and 1 day to 10 years)',
                section: 'Section 28(a)',
                details: 'Under Section 28(a) of RA 10591, unlawful acquisition or possession of a small arm is punishable by prision mayor in its medium period. You may be eligible for the amnesty provision under Section 43 if you register your firearm within the amnesty period.'
            }, // [cite: 22, 23]
            'aggravated_small_arm': {
                title: 'Aggravated Unlawful Possession of Small Arm',
                description: 'You are in possession of an unregistered small arm with aggravating conditions.',
                penalty: 'One degree higher than simple possession - Prision mayor in its maximum period to reclusion temporal in its minimum period (10 years and 1 day to 14 years and 8 months)',
                section: 'Section 28(e)',
                details: 'Under Section 28(e) of RA 10591, unlawful possession of a firearm with aggravating conditions (loaded, fitted with special sights, silencer, extra barrel, or converted to full automatic) is punishable by one degree higher than simple possession.'
            }, // [cite: 24, 25]
            'multiple_small_arms': {
                title: 'Unlawful Possession of Multiple Small Arms',
                description: 'You are in possession of three or more unregistered small arms.',
                penalty: 'Reclusion temporal to reclusion perpetua (12 years and 1 day to life imprisonment)',
                section: 'Section 28(b)',
                details: 'Under Section 28(b) of RA 10591, unlawful acquisition or possession of three or more small arms is punishable by reclusion temporal to reclusion perpetua.'
            }, // [cite: 26]
            'unlawful_class_a': {
                title: 'Unlawful Possession of Class-A Light Weapon',
                description: 'You are in possession of an unregistered Class-A light weapon.',
                penalty: 'Prision mayor in its maximum period (10 years and 1 day to 12 years)',
                section: 'Section 28(c)',
                details: 'Under Section 28(c) of RA 10591, unlawful acquisition or possession of a Class-A light weapon is punishable by prision mayor in its maximum period.'
            }, // [cite: 27]
            'unlawful_class_b': {
                title: 'Unlawful Possession of Class-B Light Weapon',
                description: 'You are in possession of an unregistered Class-B light weapon.',
                penalty: 'Reclusion perpetua (life imprisonment)',
                section: 'Section 28(d)',
                details: 'Under Section 28(d) of RA 10591, unlawful acquisition or possession of a Class-B light weapon is punishable by reclusion perpetua.'
            }, // [cite: 28]
            'major_part_small_arm': {
                title: 'Unlawful Possession of Major Part of Small Arm',
                description: 'You are in possession of an unregistered major part of a small arm.',
                penalty: 'Prision mayor in its minimum period (6 years and 1 day to 8 years)',
                section: 'Section 28(f)',
                details: 'Under Section 28(f) of RA 10591, unlawful acquisition or possession of a major part of a small arm is punishable by prision mayor in its minimum period.'
            }, // [cite: 29]
            'major_part_class_a': {
                title: 'Unlawful Possession of Major Part of Class-A Light Weapon',
                description: 'You are in possession of an unregistered major part of a Class-A light weapon.',
                penalty: 'Prision mayor in its medium period (8 years and 1 day to 10 years)',
                section: 'Section 28(h)',
                details: 'Under Section 28(h) of RA 10591, unlawful acquisition or possession of a major part of a Class-A light weapon is punishable by prision mayor in its medium period.'
            }, // [cite: 30, 31]
            'major_part_class_b': {
                title: 'Unlawful Possession of Major Part of Class-B Light Weapon',
                description: 'You are in possession of an unregistered major part of a Class-B light weapon.',
                penalty: 'Prision mayor in its maximum period (10 years and 1 day to 12 years)',
                section: 'Section 28(j)',
                details: 'Under Section 28(j) of RA 10591, unlawful acquisition or possession of a major part of a Class-B light weapon is punishable by prision mayor in its maximum period.'
            }, // [cite: 31, 32]
            'no_carry_permit': {
                title: 'Carrying Firearm Without Permit',
                description: 'You are carrying a registered firearm outside your residence without a valid permit to carry.',
                penalty: 'Prision correccional (6 months and 1 day to 6 years) and a fine of Ten thousand pesos (P10,000.00)',
                section: 'Section 31',
                details: 'Under Section 31 of RA 10591, carrying a registered firearm outside your residence without any legal authority is punishable by prision correccional and a fine of Ten thousand pesos (P10,000.00).'
            }, // [cite: 32, 33]
            'not_qualified': {
                title: 'Not Qualified for Firearm License',
                description: 'Based on your responses, you do not meet the qualifications to obtain a firearm license under RA 10591.',
                penalty: 'Not applicable - You are not eligible to acquire a firearm legally.',
                section: 'Section 4',
                details: 'Section 4 of RA 10591 outlines the standards and requisites for obtaining a license to own and possess firearms. You must meet all qualifications, including being a Filipino citizen, at least 21 years old, having gainful work/occupation/business, passing psychiatric and drug tests, and completing a gun safety seminar.'
            }, // [cite: 34, 35]
            'expired_less_than_six': {
                title: 'Expired License (Less than Six Months)',
                description: 'Your firearm license has expired but for less than six months.',
                penalty: 'You should renew your license immediately to avoid revocation.',
                section: 'Section 19',
                details: 'Under Section 19 of RA 10591, failure to renew your license on or before the date of its expiration causes the revocation of the license and of the registration of the firearm. However, you can still renew within six months of expiration.'
            }, // [cite: 36, 37]
            'single_expiry': {
                title: 'Expired License (More than Six Months)',
                description: 'Your firearm license has expired for more than six months.',
                penalty: 'Revocation of license and registration - Your firearm may be confiscated or forfeited.',
                section: 'Section 19',
                details: 'Under Section 19 of RA 10591, failure to renew your license on or before the date of its expiration causes the revocation of the license and of the registration of the firearm. The firearm shall be confiscated or forfeited in favor of the government after due process.'
            }, // [cite: 38, 39]
            'multiple_expiry': {
                title: 'Multiple License Expirations',
                description: 'Your firearm license has expired on two or more occasions without renewal.',
                penalty: 'Perpetual disqualification from applying for any firearm license.',
                section: 'Section 19',
                details: 'Under Section 19 of RA 10591, failure to renew a license or registration within the periods stated on two (2) occasions shall cause the holder of the firearm to be perpetually disqualified from applying for any firearm license.'
            }, // [cite: 40]
             'previous_license_class_a': {
                title: 'Previously Licensed Class-A Light Weapon',
                description: 'You previously had a license for a Class-A light weapon before RA 10591 took effect.',
                penalty: 'None - You may continue to possess and renew the license for your Class-A light weapon.',
                section: 'Section 10',
                details: 'Under Section 10 of RA 10591, private individuals who already have licenses to possess Class-A light weapons upon the effectivity of this Act shall not be deprived of the privilege to continue possessing the same and renewing the licenses therefor.'
            }, // [cite: 41, 42]
            'unauthorized_class_a': {
                title: 'Unauthorized Acquisition of Class-A Light Weapon',
                description: 'You are attempting to acquire a Class-A light weapon without prior authorization.',
                penalty: 'Not applicable - You cannot legally acquire a Class-A light weapon.',
                section: 'Section 10',
                details: 'Under Section 10 of RA 10591, light weapons shall be lawfully acquired or possessed exclusively by the AFP, PNP, and other law enforcement agencies authorized by the President in the performance of their duties. Private individuals may only possess Class-A light weapons if they had licenses before the effectivity of the Act.'
            }, // [cite: 43, 44]
            'unauthorized_class_b': {
                title: 'Unauthorized Acquisition of Class-B Light Weapon',
                description: 'You are attempting to acquire a Class-B light weapon without being a member of authorized agencies.',
                penalty: 'Not applicable - Class-B light weapons can only be acquired by authorized agencies.',
                section: 'Section 10',
                details: 'Under Section 10 of RA 10591, Class-B light weapons shall be lawfully acquired or possessed exclusively by the AFP, PNP, and other law enforcement agencies authorized by the President in the performance of their duties.'
            }, // [cite: 45, 46]
			'unlawful_ammo_small_arm_result': {
				title: 'Unlawful Possession of Ammunition for Small Arm',
				description: 'You are in unlawful possession of ammunition for a small arm.',
				penalty: 'Prision mayor in its minimum period (6 years and 1 day to 8 years).', // [cite: 161]
				section: 'Section 28(g)', // [cite: 161]
				details: 'Under Section 28(g) of RA 10591, unlawful acquisition or possession of ammunition for a small arm is penalized. If this violation is committed by the same person charged with the unlawful acquisition or possession of a small arm, this violation shall be absorbed by the latter. [cite: 162]'
			},
			'unlawful_ammo_class_a_result': {
				title: 'Unlawful Possession of Ammunition for Class-A Light Weapon',
				description: 'You are in unlawful possession of ammunition for a Class-A light weapon.',
				penalty: 'Prision mayor in its medium period (8 years and 1 day to 10 years).', // [cite: 164]
				section: 'Section 28(i)', // [cite: 164]
				details: 'Under Section 28(i) of RA 10591, unlawful acquisition or possession of ammunition for a Class-A light weapon is penalized. If this violation is committed by the same person charged with the unlawful acquisition or possession of a Class-A light weapon, this violation shall be absorbed by the latter. [cite: 165]'
			},
			'unlawful_ammo_class_b_result': {
				title: 'Unlawful Possession of Ammunition for Class-B Light Weapon',
				description: 'You are in unlawful possession of ammunition for a Class-B light weapon.',
				penalty: 'Prision mayor in its maximum period (10 years and 1 day to 12 years).', // [cite: 167]
				section: 'Section 28(k)', // [cite: 167]
				details: 'Under Section 28(k) of RA 10591, unlawful acquisition or possession of ammunition for a Class-B light weapon is penalized. If this violation is committed by the same person charged with the unlawful acquisition or possession of a Class-B light weapon, this violation shall be absorbed by the latter. [cite: 168]'
			},
			'result_sec29_aggravating': {
				title: 'Use of Loose Firearm - Aggravating Circumstance',
				description: 'The use of a loose firearm, when inherent in the commission of a crime, is considered an aggravating circumstance.', // [cite: 169]
				penalty: 'The penalty for the main crime will be aggravated. Consult the Revised Penal Code for rules on aggravating circumstances.',
				section: 'Section 29', // [cite: 169]
				details: 'Section 29 states that the use of a loose firearm, when inherent in the commission of a crime punishable under the Revised Penal Code or other special laws, shall be considered as an aggravating circumstance. [cite: 169]'
			},
			'result_sec29_penalty_override': {
				title: 'Use of Loose Firearm - Penalty Override',
				description: 'The crime was committed with a loose firearm, and the penalty for that crime is lower than the penalty for illegal possession.',
				penalty: 'The penalty for illegal possession of the firearm (under Section 28) shall be imposed IN LIEU of the penalty for the crime charged.', // [cite: 169]
				section: 'Section 29', // [cite: 169]
				details: 'If the crime committed with the use of a loose firearm is penalized by the law with a maximum penalty lower than that prescribed in Section 28 for illegal possession of firearm, the penalty for illegal possession of firearm shall be imposed in lieu of the penalty for the crime charged. [cite: 169]'
			},
			'result_sec29_penalty_additional': {
				title: 'Use of Loose Firearm - Additional Penalty',
				description: 'The crime was committed with a loose firearm, and the penalty for that crime is equal to the penalty for illegal possession.',
				penalty: 'The penalty of prision mayor in its minimum period shall be imposed IN ADDITION to the penalty for the crime charged.', // [cite: 170]
				section: 'Section 29', // [cite: 170]
				details: 'If the crime committed with the use of a loose firearm is penalized by the law with a maximum penalty equal to that imposed under Section 28 for illegal possession of firearms, the penalty of prision mayor in its minimum period shall be imposed in addition to the penalty for the crime punishable under the Revised Penal Code or other special laws. [cite: 170]'
			},
        }; // [cite: 20]

        // Initializations
        let userName = '';
        
        let currentQuestionId = 'initial'; // [cite: 1]
        let answers = {}; // [cite: 2]
        let history = []; // [cite: 2]
        let showDetailsState = false; // [cite: 2]

        const startButton = document.querySelector('.start-button');
        const expertSystemContainer = document.getElementById('expertSystemContainer');
        const nameModal = document.getElementById('nameModal');
        const userNameInput = document.getElementById('userNameInput');
        const confirmNameButton = document.getElementById('confirmNameButton');

        const questionArea = document.getElementById('questionArea');
        const resultArea = document.getElementById('resultArea');
        const questionTextEl = document.getElementById('questionText');
        const optionsContainerEl = document.getElementById('optionsContainer');
        const historyContainerEl = document.getElementById('historyContainer');
        const historyListEl = document.getElementById('historyList');

        const resultBoxEl = document.getElementById('resultBox');
        const resultTitleEl = document.getElementById('resultTitle');
        const resultDescriptionEl = document.getElementById('resultDescription');
        const resultPenaltyEl = document.getElementById('resultPenalty');
        const resultSectionEl = document.getElementById('resultSection');
        const toggleDetailsButtonEl = document.getElementById('toggleDetailsButton');
        const detailsContentEl = document.getElementById('detailsContent');
        const resultHistoryContainerEl = document.getElementById('resultHistoryContainer');
        const resultHistoryListEl = document.getElementById('resultHistoryList');


        function findQuestionById(id) {
            return questions.find(q => q.id === id); // [cite: 47]
        }

        function displayHistory() {
            historyListEl.innerHTML = '';
            resultHistoryListEl.innerHTML = '';
            if (history.length > 0) {
                historyContainerEl.style.display = 'block';
                history.forEach(item => {
                    const listItem = document.createElement('li');
                    const qSpan = document.createElement('span');
                    qSpan.className = 'question-history';
                    qSpan.textContent = `Q: ${item.question}`;
                    const aSpan = document.createElement('span');
                    aSpan.className = 'answer-history';
                    aSpan.textContent = `A: ${item.answer}`;
                    listItem.appendChild(qSpan);
                    listItem.appendChild(document.createElement('br'));
                    listItem.appendChild(aSpan);
                    historyListEl.appendChild(listItem.cloneNode(true)); // [cite: 59, 60]
                    resultHistoryListEl.appendChild(listItem); // [cite: 68, 69]
                });
            } else {
                historyContainerEl.style.display = 'none';
            }
        }

        function handleAnswer(option) {
            const currentQuestionObj = findQuestionById(currentQuestionId); // [cite: 48]
            answers[currentQuestionObj.id] = option.text; // [cite: 49]
            history.push({ // [cite: 50]
                question: currentQuestionObj.text,
                answer: option.text
            });

            if (resultsData[option.next]) { // [cite: 51]
                displayResult(resultsData[option.next]);
            } else {
                currentQuestionId = option.next; // [cite: 52]
                renderQuestion();
            }
            displayHistory();
        }

        function renderQuestion() {
            const questionObj = findQuestionById(currentQuestionId); // [cite: 55]
            if (!questionObj) return;

            questionTextEl.textContent = questionObj.text; // [cite: 56]
            optionsContainerEl.innerHTML = '';
            questionObj.options.forEach((option, index) => { // [cite: 56]
                const button = document.createElement('button');
                button.textContent = option.text;
                button.onclick = () => handleAnswer(option);
                optionsContainerEl.appendChild(button); // [cite: 57]
            });
            questionArea.style.display = 'block';
            resultArea.style.display = 'none';
        }

        function displayResult(result) {
            questionArea.style.display = 'none';
            resultArea.style.display = 'block';

            // Include user's name in the result
            resultTitleEl.textContent = `${userName}, ${result.title}`;
            resultDescriptionEl.textContent = result.description;
            resultPenaltyEl.textContent = result.penalty;
            resultSectionEl.textContent = `RA 10591, ${result.section}`;
            detailsContentEl.textContent = result.details;

            resultBoxEl.className = 'result-box';
            if (result.penalty.includes('None')) {
                resultBoxEl.classList.add('success');
            } else {
                resultBoxEl.classList.add('error');
            }
            
            showDetailsState = false;
            detailsContentEl.style.display = 'none';
            toggleDetailsButtonEl.textContent = 'Show Details';
            displayHistory();
        }

        toggleDetailsButtonEl.onclick = () => {
            showDetailsState = !showDetailsState; // [cite: 64]
            if (showDetailsState) {
                detailsContentEl.style.display = 'block'; // [cite: 65]
                toggleDetailsButtonEl.textContent = 'Hide Details'; // [cite: 64, 65]
            } else {
                detailsContentEl.style.display = 'none'; // [cite: 65]
                toggleDetailsButtonEl.textContent = 'Show Details'; // [cite: 64, 65]
            }
        };

        function resetSystem() {
            currentQuestionId = 'initial'; // [cite: 53]
            answers = {}; // [cite: 53]
            history = []; // [cite: 54]
            showDetailsState = false; // [cite: 54]
            historyContainerEl.style.display = 'none';
            historyListEl.innerHTML = '';
            resultHistoryListEl.innerHTML = '';
            renderQuestion(); // [cite: 55]
        }

        // Add event listeners for the start button and name confirmation
        startButton.addEventListener('click', () => {
            if (expertSystemContainer.style.display === 'none' || !expertSystemContainer.style.display) {
                // Show name input modal
                nameModal.style.display = 'block';
            } else {
                // Close expert system
                expertSystemContainer.style.display = 'none';
                startButton.textContent = 'Start';
            }
        });

        confirmNameButton.addEventListener('click', () => {
            userName = userNameInput.value.trim();
            if (userName) {
                nameModal.style.display = 'none';
                expertSystemContainer.style.display = 'block';
                startButton.textContent = 'Close';
                resetSystem(); // Ensure fresh start
            } else {
                alert('Please enter your name to continue');
            }
        });

        // Close modal if clicked outside
        window.addEventListener('click', (event) => {
            if (event.target === nameModal) {
                nameModal.style.display = 'none';
            }
        });

	// Enter Key
        userNameInput.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // prevent form submission or newline
                confirmNameButton.click(); // simulate button click
            }
        });

        // Initial question rendering
        renderQuestion();
        // --- End of script ---//
