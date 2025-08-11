// Application Data
const appData = {
    "phases": [
        {"name": "Discovery", "total": 3, "completed": 0, "priority": "high", "color": "#3B82F6", "processes": [
            {"number": "01", "title": "Understand the current reporting landscape and business processes", "phase": "Discovery", "priority": "High", "owners": "Business Process Owners, BI Team, SAC Consultant", "status": "Not Started", "description": "This process is part of the Discovery phase of the SAC implementation. It has been classified as High priority and requires collaboration between the assigned process owners.", "completed": false, "startWeek": 1, "duration": 2},
            {"number": "02", "title": "Identify key KPIs, reports, and dashboards required", "phase": "Discovery", "priority": "High", "owners": "Functional Leads (Finance, Sales, SCM, Production), Business Analysts", "status": "Not Started", "description": "Identify and document all key performance indicators, critical reports, and essential dashboards that will be required for the SAC implementation.", "completed": false, "startWeek": 2, "duration": 3},
            {"number": "03", "title": "Analyze existing pain points in reporting and analytics", "phase": "Discovery", "priority": "High", "owners": "Business Owners, Super Users, SAC Consultant", "status": "Not Started", "description": "Conduct a thorough analysis of current reporting challenges and analytical bottlenecks to inform the SAC implementation strategy.", "completed": false, "startWeek": 3, "duration": 2}
        ]},
        {"name": "Requirements", "total": 1, "completed": 0, "priority": "high", "color": "#10B981", "processes": [
            {"number": "04", "title": "Capture business requirements (KPI definitions, dimensions, filters)", "phase": "Requirements", "priority": "High", "owners": "Business Analysts, Business Owners, SAC Consultant", "status": "Not Started", "description": "Document detailed business requirements including KPI definitions, required dimensions, and necessary filters for the SAC implementation.", "completed": false, "startWeek": 5, "duration": 3}
        ]},
        {"name": "Technical Foundation", "total": 3, "completed": 0, "priority": "high", "color": "#8B5CF6", "processes": [
            {"number": "05", "title": "Evaluate data sources (S/4HANA, BW/4HANA, Excel, Datasphere, others)", "phase": "Technical", "priority": "High", "owners": "IT Team, Basis, Data Engineers, SAC Architect", "status": "Not Started", "description": "Assess and evaluate all potential data sources including S/4HANA, BW/4HANA, Excel files, Datasphere, and other relevant systems.", "completed": false, "startWeek": 6, "duration": 2},
            {"number": "06", "title": "Define connectivity strategy (Live vs Import)", "phase": "Technical", "priority": "High", "owners": "SAC Architect, Basis Team", "status": "Not Started", "description": "Determine the optimal connectivity approach for each data source, deciding between live connections and data import strategies.", "completed": false, "startWeek": 8, "duration": 3},
            {"number": "07", "title": "Data model requirements (Analytical/Planning models, hierarchies, etc.)", "phase": "Technical", "priority": "High", "owners": "Data Modeler, IT Team, SAC Consultant", "status": "Not Started", "description": "Define comprehensive data model requirements including analytical models, planning models, hierarchies, and data relationships.", "completed": false, "startWeek": 10, "duration": 4}
        ]},
        {"name": "Data Readiness", "total": 2, "completed": 0, "priority": "medium", "color": "#F59E0B", "processes": [
            {"number": "08", "title": "Master Data Readiness/Quality Check", "phase": "Data Readiness", "priority": "Medium", "owners": "Data Governance Team, IT Team, Business Analysts", "status": "Not Started", "description": "Conduct thorough master data quality assessment and ensure data readiness for SAC implementation.", "completed": false, "startWeek": 12, "duration": 2},
            {"number": "09", "title": "Transactional Data Readiness/Quality Check", "phase": "Data Readiness", "priority": "Medium", "owners": "IT Team, Functional Teams", "status": "Not Started", "description": "Verify transactional data quality and readiness for integration with SAC analytics and reporting.", "completed": false, "startWeek": 14, "duration": 3}
        ]},
        {"name": "Security & Access", "total": 1, "completed": 0, "priority": "medium", "color": "#EF4444", "processes": [
            {"number": "10", "title": "Define role-based access and security requirements", "phase": "Security", "priority": "Medium", "owners": "IT Security, SAC Consultant", "status": "Not Started", "description": "Establish comprehensive role-based access controls and security requirements for the SAC implementation.", "completed": false, "startWeek": 16, "duration": 2}
        ]},
        {"name": "Implementation", "total": 2, "completed": 0, "priority": "medium", "color": "#06B6D4", "processes": [
            {"number": "11", "title": "Build prototype stories (dashboards) for key departments", "phase": "Implementation", "priority": "Medium", "owners": "SAC Consultant, Business Analysts, Power Users", "status": "Not Started", "description": "Create prototype dashboards and stories for key departments to validate design and functionality.", "completed": false, "startWeek": 18, "duration": 4},
            {"number": "12", "title": "Review SAC story features (filters, charts, calculations, drill-downs)", "phase": "Implementation", "priority": "Low", "owners": "Power Users, Business Users, SAC Consultant", "status": "Not Started", "description": "Comprehensive review of SAC story features including filters, charts, calculations, and drill-down capabilities.", "completed": false, "startWeek": 20, "duration": 3}
        ]},
        {"name": "Evaluation", "total": 1, "completed": 0, "priority": "low", "color": "#84CC16", "processes": [
            {"number": "13", "title": "Conduct Fit-Gap analysis & tool fitment evaluation", "phase": "Evaluation", "priority": "Low", "owners": "SAC Consultant, BI Lead, Business & IT Stakeholders", "status": "Not Started", "description": "Perform comprehensive fit-gap analysis and evaluate SAC tool fitment against business requirements.", "completed": false, "startWeek": 22, "duration": 2}
        ]},
        {"name": "Planning", "total": 1, "completed": 0, "priority": "low", "color": "#EC4899", "processes": [
            {"number": "14", "title": "Finalize MVP scope, delivery phases, and roadmap", "phase": "Planning", "priority": "Low", "owners": "Project Manager, Business Lead, IT Team, SAC Architect", "status": "Not Started", "description": "Define the minimum viable product scope, establish delivery phases, and create detailed project roadmap.", "completed": false, "startWeek": 24, "duration": 3}
        ]}
    ],
    "timeline": {
        "totalWeeks": 28,
        "startDate": "2025-08-11",
        "timeScale": "weeks",
        "quarters": [
            {"name": "Q3 2025", "startWeek": 1, "endWeek": 13, "months": ["Aug 25", "Sep 25", "Oct 25"]},
            {"name": "Q4 2025", "startWeek": 14, "endWeek": 26, "months": ["Nov 25", "Dec 25", "Jan 26"]},
            {"name": "Q1 2026", "startWeek": 27, "endWeek": 39, "months": ["Feb 26", "Mar 26", "Apr 26"]}
        ]
    },
    "team": [
        {"id": 1, "name": "Sarah Johnson", "role": "Project Manager", "email": "sarah.johnson@valantic.com", "initials": "SJ"},
        {"id": 2, "name": "Michael Chen", "role": "SAC Consultant", "email": "michael.chen@valantic.com", "initials": "MC"},
        {"id": 3, "name": "Emma Rodriguez", "role": "Business Analyst", "email": "emma.rodriguez@valantic.com", "initials": "ER"}
    ],
    "totalProcesses": 14,
    "completedProcesses": 0
};

// Global variables
let overallProgressChart;
let currentFilter = 'all';
let searchTerm = '';
let isEditMode = false;
let isDragging = false;
let isResizing = false;
let dragStartX = 0;
let dragStartWeek = 0;
let currentEditingTask = null;
let originalTaskData = {};

// Team management variables
let currentEditingTeamMember = null;
let teamMemberIdCounter = 4; // Next ID for new team members

// Phase color mapping
const phaseColors = {
    'Discovery': 'discovery',
    'Requirements': 'requirements',
    'Technical Foundation': 'technical',
    'Data Readiness': 'data-readiness',
    'Security & Access': 'security',
    'Implementation': 'implementation',
    'Evaluation': 'evaluation',
    'Planning': 'planning'
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Application initializing...');
    
    // Add a small delay to ensure DOM is fully ready
    setTimeout(() => {
        initializeTabs();
        initializeOverallProgressChart();
        generateProcessCards();
        generateGanttChart();
        generateTeamCards();
        initializeSearch();
        initializeFilters();
        initializePhaseCards();
        initializeModal();
        initializeGanttControls();
        initializeTaskEditModal();
        initializeTeamManagement();
        console.log('Application initialized successfully');
    }, 200);
});

// Tab Management - Completely rewritten with direct approach
function initializeTabs() {
    console.log('Setting up tabs...');
    
    // Bind tab clicks directly with specific handlers
    bindTabClick('overview');
    bindTabClick('processes');
    bindTabClick('timeline');
    bindTabClick('team');
    
    console.log('All tabs bound successfully');
}

function bindTabClick(tabName) {
    const tabElement = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabElement) {
        tabElement.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Switching to:', tabName);
            activateTab(tabName);
        };
        console.log(`Tab ${tabName} bound successfully`);
    } else {
        console.error(`Tab element not found: ${tabName}`);
    }
}

function activateTab(targetTab) {
    console.log('Activating tab:', targetTab);
    
    // Hide all tab contents
    const allContents = ['overview', 'processes', 'timeline', 'team'];
    allContents.forEach(contentId => {
        const content = document.getElementById(contentId);
        const tab = document.querySelector(`[data-tab="${contentId}"]`);
        
        if (content) {
            content.classList.remove('active');
        }
        if (tab) {
            tab.classList.remove('active');
        }
    });
    
    // Show target tab content
    const targetContent = document.getElementById(targetTab);
    const targetTabElement = document.querySelector(`[data-tab="${targetTab}"]`);
    
    if (targetContent) {
        targetContent.classList.add('active');
        console.log(`Content ${targetTab} activated`);
    }
    
    if (targetTabElement) {
        targetTabElement.classList.add('active');
        console.log(`Tab ${targetTab} activated`);
    }
    
    // Special handling for timeline
    if (targetTab === 'timeline') {
        setTimeout(() => {
            const timelineContainer = document.getElementById('ganttTimeline');
            if (timelineContainer && !timelineContainer.innerHTML.trim()) {
                console.log('Regenerating timeline...');
                generateGanttChart();
            }
        }, 100);
    }
}

// Chart Initialization
function initializeOverallProgressChart() {
    const canvas = document.getElementById('overallProgressChart');
    if (!canvas) {
        console.error('Chart canvas not found');
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    overallProgressChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Completed', 'Remaining'],
            datasets: [{
                data: [appData.completedProcesses, appData.totalProcesses - appData.completedProcesses],
                backgroundColor: ['#1FB8CD', '#ECEBD5'],
                borderWidth: 0,
                cutout: '70%'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const percentage = Math.round((context.parsed / appData.totalProcesses) * 100);
                            return `${context.label}: ${context.parsed} (${percentage}%)`;
                        }
                    }
                }
            }
        },
        plugins: [{
            beforeDraw: function(chart) {
                const width = chart.width,
                      height = chart.height,
                      ctx = chart.ctx;
                
                ctx.restore();
                const fontSize = (height / 114).toFixed(2);
                ctx.font = `bold ${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";
                ctx.fillStyle = '#0071c5';
                
                const text = `${Math.round((appData.completedProcesses / appData.totalProcesses) * 100)}%`;
                const textX = Math.round((width - ctx.measureText(text).width) / 2);
                const textY = height / 2;
                
                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        }]
    });
}

// Process Cards Generation
function generateProcessCards() {
    const container = document.getElementById('processesContainer');
    if (!container) return;
    
    container.innerHTML = '';

    appData.phases.forEach(phase => {
        const phaseSection = document.createElement('div');
        phaseSection.className = 'process-group';
        phaseSection.innerHTML = `<h3>${phase.name}</h3>`;

        phase.processes.forEach(process => {
            const processCard = createProcessCard(process);
            phaseSection.appendChild(processCard);
        });

        container.appendChild(phaseSection);
    });
}

function createProcessCard(process) {
    const card = document.createElement('div');
    card.className = 'process-card';
    card.setAttribute('data-phase', process.phase);
    card.setAttribute('data-priority', process.priority.toLowerCase());
    
    card.innerHTML = `
        <div class="process-header">
            <div class="process-info">
                <h4>${process.title}</h4>
                <div class="process-meta">
                    Phase: ${process.phase} • Priority: ${process.priority}
                </div>
            </div>
            <div class="process-number">${process.number}</div>
        </div>
        <div class="process-owners">
            <strong>Owners:</strong> ${process.owners}
        </div>
    `;

    card.addEventListener('click', () => {
        showProcessModal(process);
    });

    return card;
}

// Team Management Functions
function generateTeamCards() {
    console.log('Generating team cards...');
    const container = document.getElementById('teamGrid');
    if (!container) {
        console.error('Team grid container not found');
        return;
    }
    
    container.innerHTML = '';

    appData.team.forEach(member => {
        const teamCard = createTeamCard(member);
        container.appendChild(teamCard);
    });
    
    console.log('Team cards generated successfully');
}

function createTeamCard(member) {
    const card = document.createElement('div');
    card.className = 'team-card';
    card.setAttribute('data-member-id', member.id);
    
    card.innerHTML = `
        <div class="team-avatar">${member.initials}</div>
        <div class="team-info">
            <h3>${member.name}</h3>
            <p class="team-role">${member.role}</p>
            <a href="mailto:${member.email}" class="team-email" target="_blank">${member.email}</a>
        </div>
        <div class="team-actions">
            <button class="team-action-btn edit" title="Edit team member">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                    <path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4z"></path>
                </svg>
            </button>
            <button class="team-action-btn delete" title="Delete team member">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="3,6 5,6 21,6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2 2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
            </button>
        </div>
    `;

    // Add event listeners directly to buttons
    const editBtn = card.querySelector('.edit');
    const deleteBtn = card.querySelector('.delete');
    
    if (editBtn) {
        editBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            editTeamMember(member.id);
        };
    }
    
    if (deleteBtn) {
        deleteBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            deleteTeamMember(member.id);
        };
    }

    return card;
}

function initializeTeamManagement() {
    console.log('Initializing team management...');
    
    // Add Team Member button
    const addButton = document.getElementById('addTeamMemberBtn');
    if (addButton) {
        addButton.onclick = function(e) {
            e.preventDefault();
            showTeamMemberModal();
        };
    }

    // Team Modal event listeners
    const teamModal = document.getElementById('teamModal');
    const closeTeamModalBtn = document.getElementById('closeTeamModal');
    const cancelTeamEditBtn = document.getElementById('cancelTeamEdit');
    const teamMemberForm = document.getElementById('teamMemberForm');

    if (closeTeamModalBtn) {
        closeTeamModalBtn.onclick = function() {
            hideTeamMemberModal();
        };
    }

    if (cancelTeamEditBtn) {
        cancelTeamEditBtn.onclick = function() {
            hideTeamMemberModal();
        };
    }

    if (teamModal) {
        teamModal.onclick = function(e) {
            if (e.target === teamModal) {
                hideTeamMemberModal();
            }
        };
    }

    if (teamMemberForm) {
        teamMemberForm.onsubmit = function(e) {
            e.preventDefault();
            saveTeamMember();
        };
    }

    // Delete confirmation modal
    const deleteModal = document.getElementById('deleteConfirmModal');
    const closeDeleteModalBtn = document.getElementById('closeDeleteModal');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    const confirmDeleteBtn = document.getElementById('confirmDelete');

    if (closeDeleteModalBtn) {
        closeDeleteModalBtn.onclick = function() {
            hideDeleteConfirmModal();
        };
    }

    if (cancelDeleteBtn) {
        cancelDeleteBtn.onclick = function() {
            hideDeleteConfirmModal();
        };
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.onclick = function() {
            confirmDeleteTeamMember();
        };
    }

    if (deleteModal) {
        deleteModal.onclick = function(e) {
            if (e.target === deleteModal) {
                hideDeleteConfirmModal();
            }
        };
    }

    console.log('Team management initialization complete');
}

function generateInitials(name) {
    return name.split(' ')
        .map(part => part.charAt(0).toUpperCase())
        .join('')
        .substring(0, 2);
}

function showTeamMemberModal(memberId = null) {
    console.log('Showing team member modal for:', memberId || 'new member');
    
    const modal = document.getElementById('teamModal');
    const modalTitle = document.getElementById('teamModalTitle');
    const nameInput = document.getElementById('teamMemberName');
    const roleInput = document.getElementById('teamMemberRole');
    const emailInput = document.getElementById('teamMemberEmail');
    const saveButton = document.getElementById('saveTeamMember');

    if (!modal || !modalTitle || !nameInput || !roleInput || !emailInput) {
        console.error('Team modal elements not found');
        return;
    }

    // Clear previous errors
    clearFormErrors();

    if (memberId) {
        // Edit mode
        const member = appData.team.find(m => m.id === memberId);
        if (member) {
            modalTitle.textContent = 'Edit Team Member';
            nameInput.value = member.name;
            roleInput.value = member.role;
            emailInput.value = member.email;
            saveButton.textContent = 'Save Changes';
            currentEditingTeamMember = memberId;
        }
    } else {
        // Add mode
        modalTitle.textContent = 'Add Team Member';
        nameInput.value = '';
        roleInput.value = '';
        emailInput.value = '';
        saveButton.textContent = 'Save Team Member';
        currentEditingTeamMember = null;
    }

    modal.classList.remove('hidden');
}

function hideTeamMemberModal() {
    const modal = document.getElementById('teamModal');
    if (modal) {
        modal.classList.add('hidden');
        clearFormErrors();
        currentEditingTeamMember = null;
    }
}

function validateTeamMemberForm() {
    const nameInput = document.getElementById('teamMemberName');
    const roleInput = document.getElementById('teamMemberRole');
    const emailInput = document.getElementById('teamMemberEmail');
    
    let isValid = true;

    // Clear previous errors
    clearFormErrors();

    // Validate name
    if (!nameInput.value.trim()) {
        showFieldError('teamMemberName', 'nameError', 'Name is required');
        isValid = false;
    }

    // Validate role
    if (!roleInput.value.trim()) {
        showFieldError('teamMemberRole', 'roleError', 'Role is required');
        isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim()) {
        showFieldError('teamMemberEmail', 'emailError', 'Email is required');
        isValid = false;
    } else if (!emailRegex.test(emailInput.value.trim())) {
        showFieldError('teamMemberEmail', 'emailError', 'Please enter a valid email address');
        isValid = false;
    } else {
        // Check for duplicate email (excluding current member if editing)
        const existingMember = appData.team.find(m => 
            m.email.toLowerCase() === emailInput.value.trim().toLowerCase() && 
            m.id !== currentEditingTeamMember
        );
        if (existingMember) {
            showFieldError('teamMemberEmail', 'emailError', 'This email is already used by another team member');
            isValid = false;
        }
    }

    return isValid;
}

function showFieldError(fieldId, errorId, message) {
    const field = document.getElementById(fieldId);
    const errorElement = document.getElementById(errorId);
    
    if (field) {
        field.classList.add('error');
    }
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.remove('hidden');
    }
}

function clearFormErrors() {
    const fields = ['teamMemberName', 'teamMemberRole', 'teamMemberEmail'];
    const errors = ['nameError', 'roleError', 'emailError'];
    
    fields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.classList.remove('error');
        }
    });
    
    errors.forEach(errorId => {
        const error = document.getElementById(errorId);
        if (error) {
            error.classList.add('hidden');
        }
    });
}

function saveTeamMember() {
    console.log('Saving team member...');
    
    if (!validateTeamMemberForm()) {
        console.log('Form validation failed');
        return;
    }

    const nameInput = document.getElementById('teamMemberName');
    const roleInput = document.getElementById('teamMemberRole');
    const emailInput = document.getElementById('teamMemberEmail');

    const memberData = {
        name: nameInput.value.trim(),
        role: roleInput.value.trim(),
        email: emailInput.value.trim(),
        initials: generateInitials(nameInput.value.trim())
    };

    if (currentEditingTeamMember) {
        // Edit existing member
        const memberIndex = appData.team.findIndex(m => m.id === currentEditingTeamMember);
        if (memberIndex !== -1) {
            appData.team[memberIndex] = {
                ...appData.team[memberIndex],
                ...memberData
            };
            console.log('Team member updated:', appData.team[memberIndex]);
        }
    } else {
        // Add new member
        const newMember = {
            id: teamMemberIdCounter++,
            ...memberData
        };
        appData.team.push(newMember);
        console.log('New team member added:', newMember);
    }

    // Regenerate team cards
    generateTeamCards();
    
    // Hide modal
    hideTeamMemberModal();
    
    console.log('Team member saved successfully');
}

function editTeamMember(memberId) {
    console.log('Editing team member:', memberId);
    showTeamMemberModal(memberId);
}

function deleteTeamMember(memberId) {
    console.log('Initiating delete for team member:', memberId);
    
    const member = appData.team.find(m => m.id === memberId);
    if (!member) {
        console.error('Team member not found:', memberId);
        return;
    }

    const modal = document.getElementById('deleteConfirmModal');
    const memberNameSpan = document.getElementById('deleteTeamMemberName');
    
    if (modal && memberNameSpan) {
        memberNameSpan.textContent = member.name;
        modal.classList.remove('hidden');
        
        // Store the member ID for confirmation
        modal.setAttribute('data-member-id', memberId);
    }
}

function hideDeleteConfirmModal() {
    const modal = document.getElementById('deleteConfirmModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.removeAttribute('data-member-id');
    }
}

function confirmDeleteTeamMember() {
    const modal = document.getElementById('deleteConfirmModal');
    const memberId = modal ? parseInt(modal.getAttribute('data-member-id')) : null;
    
    if (!memberId) {
        console.error('No member ID found for deletion');
        return;
    }
    
    console.log('Confirming delete for team member:', memberId);
    
    // Remove from data
    const memberIndex = appData.team.findIndex(m => m.id === memberId);
    if (memberIndex !== -1) {
        const removedMember = appData.team.splice(memberIndex, 1)[0];
        console.log('Team member deleted:', removedMember);
        
        // Regenerate team cards
        generateTeamCards();
        
        // Hide modal
        hideDeleteConfirmModal();
    } else {
        console.error('Team member not found for deletion:', memberId);
    }
}

// Gantt Chart Generation
function generateGanttChart() {
    console.log('Generating Gantt chart...');
    generateTimelineHeader();
    generateGanttTasks();
    generateTimelineLegend();
    console.log('Gantt chart generation complete');
}

function generateTimelineHeader() {
    const monthsContainer = document.getElementById('ganttMonths');
    const weeksContainer = document.getElementById('ganttWeeks');
    
    if (!monthsContainer || !weeksContainer) return;
    
    monthsContainer.innerHTML = '';
    weeksContainer.innerHTML = '';

    // Generate month headers
    const months = ['Aug 25', 'Sep 25', 'Oct 25', 'Nov 25', 'Dec 25', 'Jan 26', 'Feb 26'];
    const monthWeeks = [4, 4, 4, 4, 4, 4, 4];
    
    months.forEach((month, index) => {
        const monthDiv = document.createElement('div');
        monthDiv.className = 'gantt-month';
        monthDiv.textContent = month;
        monthDiv.style.gridColumn = `span ${monthWeeks[index]}`;
        monthsContainer.appendChild(monthDiv);
    });

    // Generate week headers
    for (let week = 1; week <= appData.timeline.totalWeeks; week++) {
        const weekDiv = document.createElement('div');
        weekDiv.className = 'gantt-week';
        weekDiv.textContent = week;
        weeksContainer.appendChild(weekDiv);
    }
}

function generateGanttTasks() {
    const tasksContainer = document.getElementById('ganttTasks');
    const timelineContainer = document.getElementById('ganttTimeline');
    
    if (!tasksContainer || !timelineContainer) return;
    
    tasksContainer.innerHTML = '';
    timelineContainer.innerHTML = '';

    appData.phases.forEach(phase => {
        // Add phase header
        const phaseTaskRow = document.createElement('div');
        phaseTaskRow.className = 'gantt-task-row phase-header';
        phaseTaskRow.innerHTML = `<div class="gantt-task-title">${phase.name}</div>`;
        tasksContainer.appendChild(phaseTaskRow);

        const phaseTimelineRow = document.createElement('div');
        phaseTimelineRow.className = 'gantt-timeline-row phase-header';
        
        // Add grid lines
        for (let i = 0; i < appData.timeline.totalWeeks; i++) {
            const gridLine = document.createElement('div');
            gridLine.className = 'gantt-grid-line';
            phaseTimelineRow.appendChild(gridLine);
        }
        
        timelineContainer.appendChild(phaseTimelineRow);

        // Add tasks for this phase
        phase.processes.forEach(process => {
            const taskRow = document.createElement('div');
            taskRow.className = 'gantt-task-row';
            taskRow.innerHTML = `
                <div class="gantt-task-number">${process.number}</div>
                <div class="gantt-task-title">${process.title}</div>
            `;
            tasksContainer.appendChild(taskRow);

            const timelineRow = document.createElement('div');
            timelineRow.className = 'gantt-timeline-row';
            timelineRow.setAttribute('data-task-id', process.number);
            
            // Add grid lines
            for (let i = 0; i < appData.timeline.totalWeeks; i++) {
                const gridLine = document.createElement('div');
                gridLine.className = 'gantt-grid-line';
                timelineRow.appendChild(gridLine);
            }

            // Add gantt bar
            const ganttBar = createGanttBar(process, phase.name);
            timelineRow.appendChild(ganttBar);
            
            timelineContainer.appendChild(timelineRow);
        });
    });
}

function createGanttBar(process, phaseName) {
    const bar = document.createElement('div');
    bar.className = `gantt-bar ${phaseColors[phaseName] || 'discovery'}`;
    bar.setAttribute('data-task-id', process.number);
    bar.setAttribute('data-start-week', process.startWeek);
    bar.setAttribute('data-duration', process.duration);
    
    const startPercent = ((process.startWeek - 1) / appData.timeline.totalWeeks) * 100;
    const widthPercent = (process.duration / appData.timeline.totalWeeks) * 100;
    
    bar.style.left = `${startPercent}%`;
    bar.style.width = `${widthPercent}%`;
    
    // Truncate long titles
    const displayTitle = process.title.length > 25 ? process.title.substring(0, 25) + '...' : process.title;
    
    bar.innerHTML = `
        <div class="gantt-bar-text">${displayTitle}</div>
        <div class="gantt-progress" style="width: ${process.completed ? 100 : 0}%"></div>
        <div class="resize-handle left"></div>
        <div class="resize-handle right"></div>
    `;

    // Add click event listener for opening modal
    bar.onclick = function(e) {
        if (!isDragging && !isResizing) {
            e.preventDefault();
            e.stopPropagation();
            console.log('Task bar clicked:', process.number);
            showTaskEditModal(process);
        }
    };

    // Add drag functionality only when edit mode is active
    bar.addEventListener('mousedown', function(e) {
        if (isEditMode && !e.target.classList.contains('resize-handle')) {
            startDragging(e, bar, process);
        }
    });

    // Add resize functionality
    const leftHandle = bar.querySelector('.resize-handle.left');
    const rightHandle = bar.querySelector('.resize-handle.right');
    
    if (leftHandle) {
        leftHandle.addEventListener('mousedown', function(e) {
            if (isEditMode) {
                e.preventDefault();
                e.stopPropagation();
                startResizing(e, bar, 'left', process);
            }
        });
    }

    if (rightHandle) {
        rightHandle.addEventListener('mousedown', function(e) {
            if (isEditMode) {
                e.preventDefault();
                e.stopPropagation();
                startResizing(e, bar, 'right', process);
            }
        });
    }

    return bar;
}

// Drag and Drop functionality
function startDragging(e, bar, process) {
    console.log('Starting drag for task:', process.number);
    isDragging = true;
    currentEditingTask = process.number;
    dragStartX = e.clientX;
    dragStartWeek = parseInt(bar.getAttribute('data-start-week'));
    
    bar.classList.add('dragging');
    document.body.style.cursor = 'move';
    document.body.style.userSelect = 'none';
    
    const timelineContainer = document.getElementById('ganttTimeline');
    const containerRect = timelineContainer.getBoundingClientRect();
    const weekWidth = containerRect.width / appData.timeline.totalWeeks;
    
    const mouseMoveHandler = function(e) {
        if (!isDragging) return;
        
        const deltaX = e.clientX - dragStartX;
        const deltaWeeks = Math.round(deltaX / weekWidth);
        const newStartWeek = Math.max(1, Math.min(appData.timeline.totalWeeks - parseInt(bar.getAttribute('data-duration')) + 1, dragStartWeek + deltaWeeks));
        
        const startPercent = ((newStartWeek - 1) / appData.timeline.totalWeeks) * 100;
        bar.style.left = `${startPercent}%`;
        bar.setAttribute('data-start-week', newStartWeek);
    };
    
    const mouseUpHandler = function() {
        if (!isDragging) return;
        
        console.log('Ending drag for task:', currentEditingTask);
        isDragging = false;
        bar.classList.remove('dragging');
        document.body.style.cursor = '';
        document.body.style.userSelect = '';
        
        // Update the data
        updateTaskData(currentEditingTask, 'startWeek', parseInt(bar.getAttribute('data-start-week')));
        
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

function startResizing(e, bar, direction, process) {
    console.log('Starting resize for task:', process.number, 'direction:', direction);
    isResizing = true;
    currentEditingTask = process.number;
    dragStartX = e.clientX;
    
    const currentStartWeek = parseInt(bar.getAttribute('data-start-week'));
    const currentDuration = parseInt(bar.getAttribute('data-duration'));
    
    document.body.style.userSelect = 'none';
    
    const timelineContainer = document.getElementById('ganttTimeline');
    const containerRect = timelineContainer.getBoundingClientRect();
    const weekWidth = containerRect.width / appData.timeline.totalWeeks;
    
    const mouseMoveHandler = function(e) {
        if (!isResizing) return;
        
        const deltaX = e.clientX - dragStartX;
        const deltaWeeks = Math.round(deltaX / weekWidth);
        
        let newStartWeek = currentStartWeek;
        let newDuration = currentDuration;
        
        if (direction === 'left') {
            newStartWeek = Math.max(1, currentStartWeek + deltaWeeks);
            newDuration = currentDuration - (newStartWeek - currentStartWeek);
            newDuration = Math.max(1, newDuration);
        } else {
            newDuration = Math.max(1, Math.min(appData.timeline.totalWeeks - currentStartWeek + 1, currentDuration + deltaWeeks));
        }
        
        const startPercent = ((newStartWeek - 1) / appData.timeline.totalWeeks) * 100;
        const widthPercent = (newDuration / appData.timeline.totalWeeks) * 100;
        
        bar.style.left = `${startPercent}%`;
        bar.style.width = `${widthPercent}%`;
        bar.setAttribute('data-start-week', newStartWeek);
        bar.setAttribute('data-duration', newDuration);
    };
    
    const mouseUpHandler = function() {
        if (!isResizing) return;
        
        console.log('Ending resize for task:', currentEditingTask);
        isResizing = false;
        document.body.style.userSelect = '';
        
        // Update the data
        updateTaskData(currentEditingTask, 'startWeek', parseInt(bar.getAttribute('data-start-week')));
        updateTaskData(currentEditingTask, 'duration', parseInt(bar.getAttribute('data-duration')));
        
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    };
    
    document.addEventListener('mousemove', mouseMoveHandler);
    document.addEventListener('mouseup', mouseUpHandler);
}

function updateTaskData(taskId, property, value) {
    appData.phases.forEach(phase => {
        phase.processes.forEach(process => {
            if (process.number === taskId) {
                process[property] = value;
                console.log(`Updated task ${taskId} ${property} to ${value}`);
            }
        });
    });
}

// Timeline Legend
function generateTimelineLegend() {
    const legendContainer = document.getElementById('timelineLegend');
    if (!legendContainer) return;
    
    legendContainer.innerHTML = '';

    appData.phases.forEach(phase => {
        const legendItem = document.createElement('div');
        legendItem.className = 'legend-item';
        
        legendItem.innerHTML = `
            <div class="legend-color ${phaseColors[phase.name]}"></div>
            <div class="legend-label">${phase.name} (${phase.processes.length} task${phase.processes.length > 1 ? 's' : ''})</div>
        `;
        
        legendContainer.appendChild(legendItem);
    });
}

// Gantt Controls
function initializeGanttControls() {
    const editModeBtn = document.getElementById('editModeBtn');
    const resetBtn = document.getElementById('resetTimelineBtn');
    const exportBtn = document.getElementById('exportTimelineBtn');

    if (editModeBtn) {
        editModeBtn.onclick = function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            isEditMode = !isEditMode;
            const ganttContainer = document.querySelector('.gantt-container');
            
            console.log('Edit mode toggled:', isEditMode);
            
            if (isEditMode) {
                ganttContainer.classList.add('edit-mode');
                this.textContent = 'Exit Edit Mode';
                this.classList.remove('btn--outline');
                this.classList.add('btn--primary');
            } else {
                ganttContainer.classList.remove('edit-mode');
                this.textContent = 'Edit Mode';
                this.classList.remove('btn--primary');
                this.classList.add('btn--outline');
            }
        };
    }

    if (resetBtn) {
        resetBtn.onclick = function(e) {
            e.preventDefault();
            if (confirm('Are you sure you want to reset the timeline to default values?')) {
                resetTimeline();
            }
        };
    }

    if (exportBtn) {
        exportBtn.onclick = function(e) {
            e.preventDefault();
            exportTimeline();
        };
    }
}

function resetTimeline() {
    console.log('Resetting timeline...');
    
    // Reset to original data
    const originalData = {
        "01": {startWeek: 1, duration: 2},
        "02": {startWeek: 2, duration: 3},
        "03": {startWeek: 3, duration: 2},
        "04": {startWeek: 5, duration: 3},
        "05": {startWeek: 6, duration: 2},
        "06": {startWeek: 8, duration: 3},
        "07": {startWeek: 10, duration: 4},
        "08": {startWeek: 12, duration: 2},
        "09": {startWeek: 14, duration: 3},
        "10": {startWeek: 16, duration: 2},
        "11": {startWeek: 18, duration: 4},
        "12": {startWeek: 20, duration: 3},
        "13": {startWeek: 22, duration: 2},
        "14": {startWeek: 24, duration: 3}
    };

    appData.phases.forEach(phase => {
        phase.processes.forEach(process => {
            if (originalData[process.number]) {
                process.startWeek = originalData[process.number].startWeek;
                process.duration = originalData[process.number].duration;
            }
        });
    });

    generateGanttTasks();
    console.log('Timeline reset completed');
}

function exportTimeline() {
    console.log('Exporting timeline...');
    
    const data = {
        phases: appData.phases,
        timeline: appData.timeline,
        team: appData.team,
        exportDate: new Date().toISOString()
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sac-project-export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    console.log('Project data exported');
}

// Task Edit Modal
function initializeTaskEditModal() {
    const modal = document.getElementById('taskEditModal');
    const closeBtn = document.getElementById('closeTaskEditModal');
    const cancelBtn = document.getElementById('cancelTaskEdit');
    const saveBtn = document.getElementById('saveTaskEdit');

    if (closeBtn) {
        closeBtn.onclick = function() {
            modal.classList.add('hidden');
        };
    }

    if (cancelBtn) {
        cancelBtn.onclick = function() {
            modal.classList.add('hidden');
        };
    }

    if (saveBtn) {
        saveBtn.onclick = function() {
            saveTaskChanges();
        };
    }

    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        };
    }
}

function showTaskEditModal(process) {
    console.log('Opening task edit modal for:', process.number);
    
    const modal = document.getElementById('taskEditModal');
    const taskNameInput = document.getElementById('taskNameInput');
    const startWeekInput = document.getElementById('startWeekInput');
    const durationInput = document.getElementById('durationInput');

    if (modal && taskNameInput && startWeekInput && durationInput) {
        taskNameInput.value = process.title;
        startWeekInput.value = process.startWeek;
        durationInput.value = process.duration;
        
        currentEditingTask = process.number;
        originalTaskData = {
            startWeek: process.startWeek,
            duration: process.duration
        };

        modal.classList.remove('hidden');
    } else {
        console.error('Task edit modal elements not found');
    }
}

function saveTaskChanges() {
    const startWeekInput = document.getElementById('startWeekInput');
    const durationInput = document.getElementById('durationInput');
    const modal = document.getElementById('taskEditModal');

    const newStartWeek = parseInt(startWeekInput.value);
    const newDuration = parseInt(durationInput.value);

    if (newStartWeek >= 1 && newStartWeek <= appData.timeline.totalWeeks && 
        newDuration >= 1 && newDuration <= 10 &&
        newStartWeek + newDuration - 1 <= appData.timeline.totalWeeks) {
        
        updateTaskData(currentEditingTask, 'startWeek', newStartWeek);
        updateTaskData(currentEditingTask, 'duration', newDuration);
        
        // Update the visual representation
        const ganttBar = document.querySelector(`[data-task-id="${currentEditingTask}"]`);
        if (ganttBar) {
            ganttBar.setAttribute('data-start-week', newStartWeek);
            ganttBar.setAttribute('data-duration', newDuration);
            
            const startPercent = ((newStartWeek - 1) / appData.timeline.totalWeeks) * 100;
            const widthPercent = (newDuration / appData.timeline.totalWeeks) * 100;
            
            ganttBar.style.left = `${startPercent}%`;
            ganttBar.style.width = `${widthPercent}%`;
        }

        modal.classList.add('hidden');
        console.log('Task changes saved successfully');
    } else {
        alert('Please enter valid values for start week (1-28) and duration (1-10), ensuring the task doesn\'t exceed the project timeline.');
    }
}

// Search Functionality
function initializeSearch() {
    const searchInput = document.getElementById('processSearch');
    
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            searchTerm = e.target.value.toLowerCase();
            filterProcesses();
        });
    }
}

// Filter Functionality
function initializeFilters() {
    const filterChips = document.querySelectorAll('.filter-chip');
    
    filterChips.forEach(chip => {
        chip.addEventListener('click', function() {
            // Update active filter chip
            filterChips.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            
            currentFilter = this.getAttribute('data-filter');
            filterProcesses();
        });
    });
}

function filterProcesses() {
    const processCards = document.querySelectorAll('.process-card');
    const processGroups = document.querySelectorAll('.process-group');
    
    processCards.forEach(card => {
        const phase = card.getAttribute('data-phase');
        const title = card.querySelector('h4').textContent.toLowerCase();
        const owners = card.querySelector('.process-owners').textContent.toLowerCase();
        
        let matchesFilter = true;
        let matchesSearch = true;
        
        // Filter logic
        if (currentFilter !== 'all') {
            if (currentFilter === 'completed') {
                matchesFilter = false; // No completed processes yet
            } else if (currentFilter === 'Technical') {
                matchesFilter = phase.includes('Technical');
            } else {
                matchesFilter = phase === currentFilter;
            }
        }
        
        // Search logic
        if (searchTerm) {
            matchesSearch = title.includes(searchTerm) || owners.includes(searchTerm);
        }
        
        // Show/hide card
        if (matchesFilter && matchesSearch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide groups based on visible cards
    processGroups.forEach(group => {
        const visibleCards = group.querySelectorAll('.process-card[style*="block"], .process-card:not([style])');
        const hiddenCards = group.querySelectorAll('.process-card[style*="none"]');
        
        if (visibleCards.length === 0 && hiddenCards.length > 0) {
            group.style.display = 'none';
        } else {
            group.style.display = 'block';
        }
    });
}

// Phase Card Functionality
function initializePhaseCards() {
    const phaseCards = document.querySelectorAll('.phase-card');
    
    phaseCards.forEach(card => {
        card.addEventListener('click', function() {
            const phaseName = this.getAttribute('data-phase');
            
            // Switch to processes tab
            activateTab('processes');
            
            // Apply filter
            const filterChips = document.querySelectorAll('.filter-chip');
            filterChips.forEach(chip => {
                chip.classList.remove('active');
                if (chip.getAttribute('data-filter') === phaseName || 
                    (phaseName === 'Technical Foundation' && chip.getAttribute('data-filter') === 'Technical')) {
                    chip.classList.add('active');
                    currentFilter = chip.getAttribute('data-filter');
                }
            });
            
            // If no exact match found, use 'all'
            if (!document.querySelector('.filter-chip.active')) {
                document.querySelector('.filter-chip[data-filter="all"]').classList.add('active');
                currentFilter = 'all';
            }
            
            // Clear search and apply filter
            const searchInput = document.getElementById('processSearch');
            if (searchInput) {
                searchInput.value = '';
            }
            searchTerm = '';
            filterProcesses();
        });
    });
}

// Modal Functionality
function initializeModal() {
    const modal = document.getElementById('processModal');
    const closeModal = document.getElementById('closeModal');
    
    if (closeModal) {
        closeModal.onclick = function() {
            modal.classList.add('hidden');
        };
    }
    
    if (modal) {
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        };
    }
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const processModal = document.getElementById('processModal');
            const taskEditModal = document.getElementById('taskEditModal');
            const teamModal = document.getElementById('teamModal');
            const deleteModal = document.getElementById('deleteConfirmModal');
            
            if (processModal && !processModal.classList.contains('hidden')) {
                processModal.classList.add('hidden');
            }
            if (taskEditModal && !taskEditModal.classList.contains('hidden')) {
                taskEditModal.classList.add('hidden');
            }
            if (teamModal && !teamModal.classList.contains('hidden')) {
                hideTeamMemberModal();
            }
            if (deleteModal && !deleteModal.classList.contains('hidden')) {
                hideDeleteConfirmModal();
            }
        }
    });
}

function showProcessModal(process) {
    const modal = document.getElementById('processModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.textContent = `Process ${process.number}: ${process.title}`;
        
        modalBody.innerHTML = `
            <div class="modal-process-info">
                <div class="modal-field">
                    <h4>Phase</h4>
                    <p>${process.phase}</p>
                </div>
                <div class="modal-field">
                    <h4>Priority</h4>
                    <p>${process.priority}</p>
                </div>
                <div class="modal-field">
                    <h4>Process Owners</h4>
                    <p>${process.owners}</p>
                </div>
                <div class="modal-field">
                    <h4>Status</h4>
                    <p>${process.status}</p>
                </div>
                <div class="modal-field">
                    <h4>Timeline</h4>
                    <p>Week ${process.startWeek} - ${process.startWeek + process.duration - 1} (${process.duration} week${process.duration > 1 ? 's' : ''})</p>
                </div>
                <div class="modal-field">
                    <h4>Description</h4>
                    <p>${process.description}</p>
                </div>
            </div>
            <div class="modal-actions" style="margin-top: 24px; display: flex; gap: 12px;">
                <button class="btn btn--primary" onclick="markAsComplete('${process.number}')">Mark as Complete</button>
                <button class="btn btn--outline" onclick="editProcess('${process.number}')">Edit Timeline</button>
            </div>
        `;
        
        modal.classList.remove('hidden');
    }
}

// Process Management Functions
function markAsComplete(processNumber) {
    // Update the process data
    appData.phases.forEach(phase => {
        phase.processes.forEach(process => {
            if (process.number === processNumber) {
                process.completed = true;
                process.status = 'Completed';
                
                // Update the gantt bar progress
                const ganttBar = document.querySelector(`[data-task-id="${processNumber}"]`);
                if (ganttBar) {
                    const progressBar = ganttBar.querySelector('.gantt-progress');
                    if (progressBar) {
                        progressBar.style.width = '100%';
                    }
                }
            }
        });
    });
    
    // Update completion counters
    appData.completedProcesses++;
    
    // Update the overview stats and chart
    updateOverviewStats();
    
    const modal = document.getElementById('processModal');
    if (modal) {
        modal.classList.add('hidden');
    }
    
    console.log(`Process ${processNumber} marked as complete`);
}

function editProcess(processNumber) {
    const process = findProcessByNumber(processNumber);
    if (process) {
        showTaskEditModal(process);
        const processModal = document.getElementById('processModal');
        if (processModal) {
            processModal.classList.add('hidden');
        }
    }
}

function findProcessByNumber(processNumber) {
    for (let phase of appData.phases) {
        for (let process of phase.processes) {
            if (process.number === processNumber) {
                return process;
            }
        }
    }
    return null;
}

function updateOverviewStats() {
    // Update stat cards
    const statCards = document.querySelectorAll('.stat-card');
    const completionPercentage = Math.round((appData.completedProcesses / appData.totalProcesses) * 100);
    
    if (statCards.length >= 4) {
        statCards[0].querySelector('.stat-value').textContent = `${completionPercentage}%`;
        statCards[2].querySelector('.stat-value').textContent = appData.completedProcesses;
        statCards[3].querySelector('.stat-value').textContent = appData.totalProcesses - appData.completedProcesses;
    }
    
    // Update chart
    if (overallProgressChart) {
        overallProgressChart.data.datasets[0].data = [appData.completedProcesses, appData.totalProcesses - appData.completedProcesses];
        overallProgressChart.update();
    }
    
    // Update phase cards
    updatePhaseCardProgress();
}

function updatePhaseCardProgress() {
    appData.phases.forEach(phase => {
        const completedInPhase = phase.processes.filter(p => p.completed).length;
        const percentage = Math.round((completedInPhase / phase.total) * 100);
        
        const phaseCard = document.querySelector(`[data-phase="${phase.name}"]`);
        if (phaseCard) {
            const progressFill = phaseCard.querySelector('.progress-fill');
            const completionSpan = phaseCard.querySelector('.completion');
            const percentageSpan = phaseCard.querySelector('.percentage');
            
            if (progressFill) progressFill.style.width = `${percentage}%`;
            if (completionSpan) completionSpan.textContent = `${completedInPhase}/${phase.total} processes`;
            if (percentageSpan) percentageSpan.textContent = `${percentage}%`;
        }
    });
}

// Export functions for global access
window.markAsComplete = markAsComplete;
window.editProcess = editProcess;
window.activateTab = activateTab;
window.editTeamMember = editTeamMember;
window.deleteTeamMember = deleteTeamMember;