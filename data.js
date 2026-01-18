const appData = {
    user: {
        name: "BENEDICT NELSON",
        progress: 68,
        streak: {
            count: 67,
            lastLogin: "2026-01-07" // Match today's date for 'active' state demo
        }
    },
    units: {
        year1: [
            {
                id: 10100,
                code: "NUR 100",
                title: "Human Anatomy 1",
                icon: "ph-person",
                completed: false,
                description: "A comprehensive foundation in human anatomy, covering cell biology, tissues, and the skeletal, muscular, and nervous systems.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Anatomy',
                        body: `
                            <h3>Welcome to Human Anatomy</h3>
                            <p>Anatomy is the scientific study of the body's structures. Some of these structures are very small and can only be observed and analyzed with the assistance of a microscope, while others can readily be seen, manipulated, measured, and weighed.</p>
                            
                            <h4>Key Concepts</h4>
                            <ul>
                                <li><strong>Gross Anatomy:</strong> Study of the larger structures of the body, visible without the aid of magnification (from Greek "makros" meaning "large").</li>
                                <li><strong>Microscopic Anatomy:</strong> Study of structures that can be observed only with the use of a microscope or other magnification devices.</li>
                                <li><strong>Regional Anatomy:</strong> Study of the interrelationships of all structures in a specific body region, such as the abdomen.</li>
                                <li><strong>Systemic Anatomy:</strong> Study of the structures that make up a discrete body system, such as the muscular system.</li>
                            </ul>

                            <h4>Anatomical Position</h4>
                            <p>To increase precision, anatomists standardize the way in which they view the body. Just as maps are normally oriented with north at the top, the standard body "map," or <strong>anatomical position</strong>, is that of the body standing upright, with the feet at shoulder width and parallel, toes forward. The upper limbs are held out to each side, and the palms of the hands face forward.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Cell & Tissues',
                        body: `
                            <h3>Levels of Organization</h3>
                            <p>The human body is organized at several levels, from the chemical and cellular levels to the tissue, organ, organ system, and organism levels.</p>

                            <h4>The Four Primary Tissue Types</h4>
                            <p>A tissue is a group of similar cells that likely share a common embryonic origin and function together. There are four broad categories of tissues in the human body:</p>
                            <ul>
                                <li><strong>Epithelial Tissue:</strong> Covers exterior surfaces of the body, lines internal cavities and passageways, and forms certain glands.</li>
                                <li><strong>Connective Tissue:</strong> Binds the cells and organs of the body together and performs many functions, including protection, support, and integration.</li>
                                <li><strong>Muscle Tissue:</strong> Excitale tissue responding to stimulation and contracting to provide movement (Skeletal, Smooth, Cardiac).</li>
                                <li><strong>Nervous Tissue:</strong> Excitable tissue capable of propagating electrochemical signals in the form of nerve impulses.</li>
                            </ul>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Nervous Tissue Structure</h4>
                                <img src="assets/neuron_structure.png" alt="Neuron Structure Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Structure of a typical neuron showing dendrites, cell body, and axon.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: The Integumentary System',
                        body: `
                            <h3>The Skin and Its Layers</h3>
                            <p>The integumentary system refers to the skin and its accessory structures. It is the largest organ system in the human body.</p>
                            
                            <h4>Layers of the Skin</h4>
                            <ol>
                                <li><strong>Epidermis:</strong> The outermost tissue layer of the skin. It is a keratinized stratified squamous epithelium.
                                    <ul>
                                        <li><em>Stratum basale:</em> deepest layer</li>
                                        <li><em>Stratum spinosum</em></li>
                                        <li><em>Stratum granulosum</em></li>
                                        <li><em>Stratum lucidum</em> (only in thick skin)</li>
                                        <li><em>Stratum corneum:</em> most superficial layer</li>
                                    </ul>
                                </li>
                                <li><strong>Dermis:</strong> Contains blood and lymph vessels, nerves, and other structures such as hair follicles and sweat glands. Made of two layers:
                                    <ul>
                                        <li><em>Papillary layer</em> (loose, areolar connective tissue)</li>
                                        <li><em>Reticular layer</em> (dense, irregular connective tissue)</li>
                                    </ul>
                                </li>
                                <li><strong>Hypodermis (Subcutaneous):</strong> Layer of adipose tissue directly below the dermis which serves to connect the skin to the underlying fascia.</li>
                            </ol>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cross-Section of Human Skin</h4>
                                <img src="assets/skin_layers.png" alt="Skin Layers Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Diagram showing the Epidermis, Dermis, and accessory structures.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: The Skeletal System',
                        body: `
                            <h3>Bone Tissue and the Skeleton</h3>
                            <p>The skeletal system is the body system composed of bones and specialized cartilages. It performs critical functions for the human body:</p>
                            <ul>
                                <li>Supports the body</li>
                                <li>Facilitates movement</li>
                                <li>Protects internal organs</li>
                                <li>Produces blood cells</li>
                                <li>Stores and releases minerals and fat</li>
                            </ul>

                            <h4>Classification of Bones</h4>
                            <ul>
                                <li><strong>Long Bones:</strong> Cylindrical in shape, longer than they are wide (e.g., femur, humerus).</li>
                                <li><strong>Short Bones:</strong> Cube-like in shape (e.g., carpals, tarsals).</li>
                                <li><strong>Flat Bones:</strong> Thin and curved (e.g., cranial bones, scapulae).</li>
                                <li><strong>Irregular Bones:</strong> Complex shapes (e.g., vertebrae).</li>
                                <li><strong>Sesamoid Bones:</strong> Small, round bones embedded in tendons (e.g., patellae).</li>
                            </ul>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Human Skeleton</h4>
                                <img src="assets/human_skeleton.png" alt="Human Skeleton Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Anterior view of the human skeleton.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: The Axial Skeleton',
                        body: `
                            <h3>Overview of the Axial Skeleton</h3>
                            <p>The axial skeleton forms the vertical, central axis of the body and includes all bones of the head, neck, chest, and back. It consists of 80 bones.</p>
                            
                            <h4>The Skull</h4>
                            <p>Consists of 22 bones: 8 cranial bones that form the brain case, and 14 facial bones that form the face structure.</p>

                            <h4>The Vertebral Column</h4>
                            <p>Also known as the spine, it consists of 24 vertebrae, the sacrum, and the coccyx.</p>
                            <ul>
                                <li><strong>Cervical (C1-C7):</strong> Neck region.</li>
                                <li><strong>Thoracic (T1-T12):</strong> Chest region, articulate with ribs.</li>
                                <li><strong>Lumbar (L1-L5):</strong> Lower back.</li>
                            </ul>

                            <h4>The Thoracic Cage</h4>
                            <p>Consists of 12 pairs of ribs and the sternum. It protects the heart and lungs.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: The Appendicular Skeleton',
                        body: `
                            <h3>Overview</h3>
                            <p>The appendicular skeleton includes all bones of the upper and lower limbs, plus the bones that attach each limb to the axial skeleton.</p>

                            <h4>Pectoral Girdle & Upper Limb</h4>
                            <ul>
                                <li><strong>Pectoral Girdle:</strong> Clavicle and Scapula.</li>
                                <li><strong>Arm:</strong> Humerus.</li>
                                <li><strong>Forearm:</strong> Ulna (medial) and Radius (lateral).</li>
                                <li><strong>Hand:</strong> Carpals (8), Metacarpals (5), Phalanges (14).</li>
                            </ul>

                            <h4>Pelvic Girdle & Lower Limb</h4>
                            <ul>
                                <li><strong>Pelvic Girdle:</strong> Hip bone (Coxal bone), formed by ilium, ischium, and pubis.</li>
                                <li><strong>Thigh:</strong> Femur (longest and strongest bone).</li>
                                <li><strong>Leg:</strong> Tibia (shinbone) and Fibula.</li>
                                <li><strong>Foot:</strong> Tarsals (7), Metatarsals (5), Phalanges (14).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Joints and Articulations',
                        body: `
                            <h3>Joint Classification</h3>
                            <p>A joint, or articulation, is any place where adjacent bones or bone and cartilage come together.</p>

                            <h4>Structural Classification</h4>
                            <ul>
                                <li><strong>Fibrous Joints:</strong> Bones held together by dense connective tissue (e.g., Sutures in skull).</li>
                                <li><strong>Cartilaginous Joints:</strong> Bones joined by cartilage (e.g., Intervertebral discs).</li>
                                <li><strong>Synovial Joints:</strong> Presence of a fluid-filled joint cavity. Most movable joints (e.g., Knee, Shoulder).</li>
                            </ul>

                            <h4>Types of Synovial Joints</h4>
                            <ul>
                                <li>Pivot (Atlas/Axis)</li>
                                <li>Hinge (Elbow)</li>
                                <li>Condyloid (Wrist)</li>
                                <li>Saddle (Thumb)</li>
                                <li>Plane (Carpals)</li>
                                <li>Ball-and-Socket (Hip, Shoulder)</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Muscle Tissue',
                        body: `
                            <h3>Types of Muscle Tissue</h3>
                            <p>Muscle tissue is characterized by properties that allow movement.</p>
                            <ul>
                                <li><strong>Skeletal Muscle:</strong> Multinucleated, striated, and voluntary. Attached to bones.</li>
                                <li><strong>Cardiac Muscle:</strong> Uninucleated (mostly), striated, and involuntary. Found only in the heart. ID: Intercalated discs.</li>
                                <li><strong>Smooth Muscle:</strong> Uninucleated, non-striated, and involuntary. Found in walls of hollow organs (stomach, vessels).</li>
                            </ul>

                            <h4>Contraction Mechanism</h4>
                            <p>The <strong>Sliding Filament Theory</strong> explains how muscles contract. Myosin filaments pull actin filaments closer together, shortening sarcomeres within the fiber.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: The Nervous System',
                        body: `
                            <h3>Organization</h3>
                            <ul>
                                <li><strong>Central Nervous System (CNS):</strong> Brain and Spinal Cord.</li>
                                <li><strong>Peripheral Nervous System (PNS):</strong> All nervous tissue outside the CNS (Nerves and Ganglia).</li>
                            </ul>

                            <h3>Cells of the Nervous System</h3>
                            <p><strong>Neurons</strong> are the functional units responsible for electrical transmission.</p>
                            <p><strong>Neuroglia</strong> (Glial cells) support and protect neurons.</p>
                            <ul>
                                <li><em>Astrocytes:</em> Blood-brain barrier.</li>
                                <li><em>Oligodendrocytes:</em> Myelination in CNS.</li>
                                <li><em>Schwann Cells:</em> Myelination in PNS.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Special Senses',
                        body: `
                            <h3>Vision (The Eye)</h3>
                            <p>The eye is a complex sensory organ housing photoreceptors (Rods and Cones) in the Retina.</p>
                            <ul>
                                <li><strong>Fibrous Tunic:</strong> Sclera and Cornea.</li>
                                <li><strong>Vascular Tunic:</strong> Choroid, Ciliary body, Iris.</li>
                                <li><strong>Neural Tunic:</strong> Retina.</li>
                            </ul>

                            <h3>Hearing and Balance (The Ear)</h3>
                            <ul>
                                <li><strong>External Ear:</strong> Auricle, Ear Canal, Tympanic Membrane.</li>
                                <li><strong>Middle Ear:</strong> Ossicles (Malleus, Incus, Stapes).</li>
                                <li><strong>Inner Ear:</strong> Cochlea (hearing) and Vestibular system (balance).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Course Final Quiz',
                        questions: [
                            { q: "Which tissue type covers the body's surface and lines internal cavities?", options: ["Connective", "Muscle", "Nervous", "Epithelial"], correct: 3 },
                            { q: "Which layer of the skin is avascular (has no blood vessels)?", options: ["Epidermis", "Dermis", "Hypodermis", "Papillary layer"], correct: 0 },
                            { q: "How many bones are in the adult human body?", options: ["200", "206", "210", "250"], correct: 1 },
                            { q: "Which bone is the longest and strongest in the body?", options: ["Humerus", "Tibia", "Femur", "Fibula"], correct: 2 },
                            { q: "What is the functional unit of the nervous system?", options: ["Neuron", "Nephron", "Glial cell", "Axon"], correct: 0 },
                            { q: "Which type of muscle tissue is voluntary?", options: ["Cardiac", "Smooth", "Skeletal", "Visceral"], correct: 2 },
                            { q: "The 'Atlas' and 'Axis' vertebrae are located in which region?", options: ["Lumbar", "Thoracic", "Cervical", "Sacral"], correct: 2 },
                            { q: "Which part of the neuron receives incoming signals?", options: ["Axon", "Dendrite", "Myelin Sheath", "Terminal"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Foundations of Anatomy',
                        questions: [
                            { q: "Which plane divides the body into equal left and right halves?", options: ["Saggital", "Transverse", "Midsaggital", "Frontal"], correct: 2 },
                            { q: "The term 'Distal' refers to a structure that is:", options: ["Closer to the point of attachment", "Farther from the point of attachment", "Toward the head", "Toward the feet"], correct: 1 },
                            { q: "Which cavity contains the heart and lungs?", options: ["Abdominal", "Pelvic", "Thoracic", "Cranial"], correct: 2 },
                            { q: "Which organelle is known as the 'powerhouse' of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"], correct: 2 },
                            { q: "What is the most abundant cartilage in the body?", options: ["Hyaline", "Elastic", "Fibrocartilage", "Articular"], correct: 0 },
                            { q: "Which bone is NOT part of the appendicular skeleton?", options: ["Femur", "Scapula", "Sternum", "Humerus"], correct: 2 },
                            { q: "Sutures of the skull are examples of which type of joint?", options: ["Synovial", "Cartilaginous", "Fibrous", "Diarthrosis"], correct: 2 },
                            { q: "Which muscle type is striated and involuntary?", options: ["Skeletal", "Cardiac", "Smooth", "Visceral"], correct: 1 },
                            { q: "The process of blood cell formation is called:", options: ["Osteogenesis", "Hematopoiesis", "Ossification", "Hemolysis"], correct: 1 },
                            { q: "Which neurotransmitter is primarily used at the neuromuscular junction?", options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"], correct: 2 },
                            { q: "The anatomical position is characterized by:", options: ["Palms facing backward", "Palms facing forward", "Lying supine", "Arms raised above head"], correct: 1 },
                            { q: "Which body cavity contains the brain?", options: ["Thoracic", "Abdominal", "Pelvic", "Cranial"], correct: 3 },
                            { q: "The elbow is _______ to the wrist.", options: ["Distal", "Proximal", "Lateral", "Medial"], correct: 1 },
                            { q: "Which tissue type is responsible for sending electrical signals?", options: ["Muscle", "Epithelial", "Nervous", "Connective"], correct: 2 },
                            { q: "The shaft of a long bone is called the:", options: ["Epiphysis", "Diaphysis", "Metaphysis", "Periosteum"], correct: 1 },
                            { q: "Which of the following is an example of a flat bone?", options: ["Femur", "Humorous", "Scapula", "Vertebrae"], correct: 2 },
                            { q: "Muscle fatigue is often due to the buildup of:", options: ["Lactic acid", "Glucose", "Oxygen", "ATP"], correct: 0 },
                            { q: "A muscle that opposes a prime mover is called a(n):", options: ["Agonist", "Synergist", "Antagonist", "Fixator"], correct: 2 },
                            { q: "Which of these is NOT a function of the skeletal system?", options: ["Support", "Protection", "Heat production", "Blood cell formation"], correct: 2 },
                            { q: "The basic unit of compact bone is the:", options: ["Osteon", "Osteoclast", "Osteoblast", "Trabeculae"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 2: Skeletal System',
                        questions: [
                            { q: "How many vertebrae are in the cervical spine?", options: ["5", "7", "12", "4"], correct: 1 },
                            { q: "The bone of the upper arm is the:", options: ["Radius", "Ulna", "Humerus", "Femur"], correct: 2 },
                            { q: "Which bone forms the heel?", options: ["Talus", "Calcaneus", "Navicular", "Cuboid"], correct: 1 },
                            { q: "The knee joint is an example of a _____ joint.", options: ["Ball and socket", "Hinge", "Pivot", "Saddle"], correct: 1 },
                            { q: "Which cells break down bone tissue?", options: ["Osteoblasts", "Osteoclasts", "Osteocytes", "Chondrocytes"], correct: 1 },
                            { q: "The soft spot on an infant's head is called a:", options: ["Suture", "Fontanelle", "Foramen", "Sinus"], correct: 1 },
                            { q: "Ribs that do not attach directly to the sternum are called:", options: ["True ribs", "False ribs", "Floating ribs", "Sternal ribs"], correct: 1 },
                            { q: "The hip joint is formed by the femur and the:", options: ["Sacrum", "Acetabulum", "Ilium", "Pubis"], correct: 1 },
                            { q: "Which condition involves a lateral curvature of the spine?", options: ["Kyphosis", "Lordosis", "Scoliosis", "Osteoporosis"], correct: 2 },
                            { q: "The membrane covering the outside of a bone is the:", options: ["Endosteum", "Perichondrium", "Periosteum", "Articular cartilage"], correct: 2 },
                            { q: "Which bone is the weight-bearing bone of the lower leg?", options: ["Fibula", "Femur", "Tibia", "Patella"], correct: 2 },
                            { q: "The carpals are bones of the:", options: ["Ankle", "Wrist", "Hand", "Foot"], correct: 1 },
                            { q: "Which of the following is a facial bone?", options: ["Sphenoid", "Occipital", "Zygomatic", "Temporal"], correct: 2 },
                            { q: "The fluid that lubricates synovial joints is called:", options: ["Serous fluid", "Synovial fluid", "Lymph", "Plasma"], correct: 1 },
                            { q: "Ligaments connect:", options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Nerve to muscle"], correct: 0 },
                            { q: "Tendons connect:", options: ["Bone to bone", "Muscle to bone", "Muscle to muscle", "Nerve to muscle"], correct: 1 },
                            { q: "Which vertebra allows for the 'Yes' motion of the head?", options: ["Atlas (C1)", "Axis (C2)", "C7", "T1"], correct: 0 },
                            { q: "Which vertebra allows for the 'No' motion of the head?", options: ["Atlas (C1)", "Axis (C2)", "C7", "T1"], correct: 1 },
                            { q: "The clavicle is commonly known as the:", options: ["Shoulder blade", "Collar bone", "Breast bone", "Shin bone"], correct: 1 },
                            { q: "Osteoporosis is best described as:", options: ["Softening of bones", "Loss of bone density", "Infection of bone", "Bone cancer"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 3: Muscular System',
                        questions: [
                            { q: "The contractile unit of a muscle fiber is the:", options: ["Sarcomere", "Myofibril", "Sarcolemma", "Sarcoplasmic reticulum"], correct: 0 },
                            { q: "Which muscle is the primary muscle of breathing?", options: ["Intercostals", "Rectus abdominis", "Diaphragm", "Pectoralis major"], correct: 2 },
                            { q: "The muscle that flexes the forearm (bicep curl) is the:", options: ["Triceps brachii", "Biceps brachii", "Deltoid", "Brachialis"], correct: 1 },
                            { q: "The large muscle of the buttocks is the:", options: ["Gluteus maximus", "Gluteus medius", "Semimembranosus", "Vastus lateralis"], correct: 0 },
                            { q: "Which muscle is used for injection in the upper arm?", options: ["Biceps brachii", "Triceps brachii", "Deltoid", "Pectoralis major"], correct: 2 },
                            { q: "The 'calf muscle' is technically known as the:", options: ["Tibialis anterior", "Gastrocnemius", "Soleus", "Peroneus longus"], correct: 1 },
                            { q: "Which neurotransmitter triggers muscle contraction?", options: ["Dopamine", "Acetylcholine", "Epinephrine", "Serotonin"], correct: 1 },
                            { q: "The thick filament in muscle fibers is:", options: ["Actin", "Myosin", "Troponin", "Tropomyosin"], correct: 1 },
                            { q: "The thin filament in muscle fibers is:", options: ["Actin", "Myosin", "Troponin", "Tropomyosin"], correct: 0 },
                            { q: "Anaerobic respiration in muscles produces:", options: ["Alcohol", "Lactic acid", "Carbon dioxide", "Water"], correct: 1 },
                            { q: "The movable attachment of a muscle is called the:", options: ["Origin", "Insertion", "Belly", "Tendon"], correct: 1 },
                            { q: "The stationary attachment of a muscle is called the:", options: ["Origin", "Insertion", "Belly", "Tendon"], correct: 0 },
                            { q: "Which muscle closes the eye (blinking)?", options: ["Orbicularis oris", "Orbicularis oculi", "Frontalis", "Zygomaticus"], correct: 1 },
                            { q: "Who is the 'kissing muscle'?", options: ["Orbicularis oris", "Orbicularis oculi", "Masseter", "Buccinator"], correct: 0 },
                            { q: "The longest muscle in the body, crossing the thigh, is the:", options: ["Quadriceps", "Hamstrings", "Sartorius", "Gracilis"], correct: 2 },
                            { q: "Which muscle group extends the knee?", options: ["Hamstrings", "Quadriceps", "Adductors", "Abductors"], correct: 1 },
                            { q: "Rigor mortis occurs due to lack of _____ to release myosin bridges.", options: ["Calcium", "ATP", "Oxygen", "Sodium"], correct: 1 },
                            { q: "Atrophy refers to:", options: ["Muscle growth", "Muscle wasting", "Muscle pain", "Muscle spasm"], correct: 1 },
                            { q: "Hypertrophy refers to:", options: ["Muscle growth", "Muscle wasting", "Muscle pain", "Muscle spasm"], correct: 0 },
                            { q: "Which type of muscle is found in the heart?", options: ["Skeletal", "Smooth", "Cardiac", "Visceral"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 4: Nervous System',
                        questions: [
                            { q: "Which part of the brain controls balance and coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], correct: 1 },
                            { q: "The 'flight or fight' response is mediated by the:", options: ["Sympathetic nervous system", "Parasympathetic nervous system", "Somatic nervous system", "Enteric nervous system"], correct: 0 },
                            { q: "Which lobe of the brain is primarily responsible for vision?", options: ["Frontal", "Parietal", "Occipital", "Temporal"], correct: 2 },
                            { q: "The myelin sheath is produced by _____ in the PNS.", options: ["Oligodendrocytes", "Astrocytes", "Schwann cells", "Microglia"], correct: 2 },
                            { q: "The gap between two neurons is called the:", options: ["Axon", "Dendrite", "Synapse", "Soma"], correct: 2 },
                            { q: "How many pairs of cranial nerves are there?", options: ["10", "12", "31", "14"], correct: 1 },
                            { q: "The largest part of the brain is the:", options: ["Cerebrum", "Cerebellum", "Brainstem", "Diencephalon"], correct: 0 },
                            { q: "Which cranial nerve is responsible for smell?", options: ["Optic (II)", "Olfactory (I)", "Oculomotor (III)", "Vagus (X)"], correct: 1 },
                            { q: "Which cranial nerve is the 'Wanderer', extending to the abdomen?", options: ["Trigeminal (V)", "Facial (VII)", "Vagus (X)", "Hypoglossal (XII)"], correct: 2 },
                            { q: "Damage to Broca's area results in difficulty:", options: ["Understanding speech", "Producing speech", "Seeing", "Hearing"], correct: 1 },
                            { q: "The 'Rest and Digest' system is the:", options: ["Sympathetic", "Parasympathetic", "Somatic", "Central"], correct: 1 },
                            { q: "CSF (Cerebrospinal Fluid) is produced by the:", options: ["Dura mater", "Choroid plexus", "Arachnoid villi", "Pie mater"], correct: 1 },
                            { q: "The protective membranes covering the CNS are called:", options: ["Viscera", "Meninges", "Pleura", "Peritoneum"], correct: 1 },
                            { q: "Which ion rushes INTO the neuron during depolarization?", options: ["Potassium", "Sodium", "Calcium", "Chloride"], correct: 1 },
                            { q: "The junction between two neurons is a:", options: ["Gap junction", "Synapse", "Desmosome", "Tight junction"], correct: 1 },
                            { q: "Which part of the brain regulates body temperature?", options: ["Thalamus", "Hypothalamus", "Pons", "Medulla"], correct: 1 },
                            { q: "Reflex arcs typically bypass the:", options: ["Spinal cord", "Brain", "Receptor", "Effector"], correct: 1 },
                            { q: "Multiple Sclerosis (MS) involves damage to the:", options: ["Axon", "Dendrite", "Myelin sheath", "Cell body"], correct: 2 },
                            { q: "Which neurotransmitter is deficient in Parkinson's disease?", options: ["Serotonin", "Dopamine", "GABA", "Glutamate"], correct: 1 },
                            { q: "Shingles is a reactivation of which virus in the nerve roots?", options: ["Herpes Simplex", "Varicella Zoster", "Ebstein-Barr", "Cytomegalovirus"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 5: Endocrine System',
                        questions: [
                            { q: "Which gland is called the 'Master Gland'?", options: ["Thyroid", "Adrenal", "Pituitary", "Pineal"], correct: 2 },
                            { q: "Insulin is produced by which organ?", options: ["Liver", "Pancreas", "Spleen", "Kidney"], correct: 1 },
                            { q: "Which hormone raises blood calcium levels?", options: ["Calcitonin", "Parathyroid Hormone (PTH)", "Thyroxine", "Insulin"], correct: 1 },
                            { q: "Which hormone lowers blood glucose?", options: ["Glucagon", "Insulin", "Cortisol", "Adrenaline"], correct: 1 },
                            { q: "Goiter is a result of a lack of:", options: ["Iron", "Calcium", "Iodine", "Sodium"], correct: 2 },
                            { q: "The 'Fight or Flight' hormone epinephrine is produced by the:", options: ["Thyroid", "Adrenal cortex", "Adrenal medulla", "Pancreas"], correct: 2 },
                            { q: "Which hormone regulates sleep-wake cycles (circadian rhythm)?", options: ["Melatonin", "Serotonin", "Dopamine", "Cortisol"], correct: 0 },
                            { q: "T3 and T4 are hormones produced by the:", options: ["Thymus", "Thyroid", "Parathyroid", "Pituitary"], correct: 1 },
                            { q: "Which condition is caused by excess cortisol?", options: ["Addison's disease", "Cushing's syndrome", "Diabetes", "Graves' disease"], correct: 1 },
                            { q: "Which hormone stimulates uterine contractions during labor?", options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"], correct: 1 },
                            { q: "Testosterone is produced primarily in the:", options: ["Prostate", "Testes", "Epididymis", "Vas deferens"], correct: 1 },
                            { q: "Type 1 Diabetes is characterized by:", options: ["Insulin resistance", "Lack of insulin production", "Excess sugar intake", "Obesity"], correct: 1 },
                            { q: "Which hormone stimulates red blood cell production?", options: ["Erythropoietin (EPO)", "Renin", "Aldosterone", "ADH"], correct: 0 },
                            { q: "The posterior pituitary stores which two hormones?", options: ["GH and TSH", "Oxytocin and ADH", "FSH and LH", "ACTH and Prolactin"], correct: 1 },
                            { q: "Gigantism is caused by an excess of:", options: ["Thyroid hormone", "Growth Hormone (GH)", "Insulin", "Cortisol"], correct: 1 },
                            { q: "Which hormone is critical for milk production?", options: ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"], correct: 1 },
                            { q: "The thymus gland is most active during:", options: ["Childhood", "Adulthood", "Old age", "Pregnancy"], correct: 0 },
                            { q: "Aldosterone regulates which ion?", options: ["Calcium", "Sodium", "Iron", "Magnesium"], correct: 1 },
                            { q: "Which gland requires iodine to function?", options: ["Adrenal", "Thyroid", "Parathyroid", "Pituitary"], correct: 1 },
                            { q: "Glucagon is produced by _____ cells in the pancreas.", options: ["Alpha", "Beta", "Delta", "F"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 6: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 7: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 8: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 9: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 10: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 10101,
                code: "NUR 105",
                title: "Fundamentals of Nursing",
                icon: "ph-hands-clapping",
                completed: false,
                description: "Introduction to the art and science of nursing, including history, ethics, and the nursing process.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: History and Evolution of Nursing',
                        body: `
                            <h3>The Origins of Nursing</h3>
                            <p>Nursing has evolved from a domestic duty performed by women to a respected profession based on scientific knowledge.</p>

                            <h4>Florence Nightingale</h4>
                            <p>Known as the "Lady with the Lamp," she is the founder of modern nursing. Her work during the Crimean War reduced mortality rates significantly through hygiene and sanitation.</p>

                            <h4>Nursing in the 20th Century</h4>
                            <p>The development of nursing education, professional organizations (ANA, NLN), and licensure established nursing as a distinct profession.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Healthcare Delivery System',
                        body: `
                            <h3>Types of Healthcare Settings</h3>
                            <ul>
                                <li><strong>Primary Care:</strong> Health promotion and disease prevention (Clinics).</li>
                                <li><strong>Secondary Care:</strong> Diagnosis and treatment of acute illness (Hospitals).</li>
                                <li><strong>Tertiary Care:</strong> Specialized and highly technical care (ICU, Burn centers).</li>
                            </ul>

                            <h3>The Healthcare Team</h3>
                            <p>Nursing is collaborative. The team includes physicians, pharmacists, therapists, social workers, and dietitians.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Legal and Ethical Aspects',
                        body: `
                            <h3>Principles of Ethics</h3>
                            <ul>
                                <li><strong>Autonomy:</strong> Respecting the patient's right to make decisions.</li>
                                <li><strong>Beneficence:</strong> Doing good and acting in the patient's best interest.</li>
                                <li><strong>Non-maleficence:</strong> The duty to "do no harm."</li>
                                <li><strong>Justice:</strong> Fairness in care delivery.</li>
                            </ul>

                            <h3>Legal Issues</h3>
                            <p>Nurses must adhere to the Nurse Practice Act. Common legal risks include negligence and malpractice.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: The Nursing Process',
                        body: `
                            <h3>ADPIE</h3>
                            <p>The Nursing Process is a systematic, patient-centered guide to nursing practice.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Nursing Process Cycle</h4>
                                <img src="assets/nursing_process.png" alt="Nursing Process ADPIE Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: The continuous cycle of Assessment, Diagnosis, Planning, Implementation, and Evaluation.</p>
                            </div>

                            <ul>
                                <li><strong>Assessment:</strong> Collecting subjective and objective data.</li>
                                <li><strong>Diagnosis:</strong> Identifying the patient's health problems (NANDA methods).</li>
                                <li><strong>Planning:</strong> Setting SMART goals.</li>
                                <li><strong>Implementation:</strong> Carrying out nursing interventions.</li>
                                <li><strong>Evaluation:</strong> Determining if goals were met.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Vital Signs Assessment',
                        body: `
                            <h3>The 5 Vital Signs</h3>
                            <p>Vital signs indicate the body's physiological status and provide a baseline for assessing response to treatment.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Key Vital Signs</h4>
                                <img src="assets/vital_signs.png" alt="Vital Signs Icons" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Temperature, Blood Pressure, Pulse, Respiration, and Oxygen Saturation.</p>
                            </div>

                            <ul>
                                <li><strong>Temperature:</strong> Normal range 36.5°C - 37.5°C.</li>
                                <li><strong>Pulse:</strong> 60 - 100 bpm (Adults).</li>
                                <li><strong>Respiration:</strong> 12 - 20 breaths/min.</li>
                                <li><strong>Blood Pressure:</strong> < 120/80 mmHg.</li>
                                <li><strong>Pain:</strong> Often considered the 5th vital sign.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Infection Prevention',
                        body: `
                            <h3>Chain of Infection</h3>
                            <p>Infection requires a pathogen, reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host.</p>

                            <h3>Hand Hygiene</h3>
                            <p>The single most important measure to prevent the spread of infection.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The 5 Moments for Hand Hygiene</h4>
                                <img src="assets/hand_hygiene.png" alt="Hand Hygiene 5 Moments" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 6.1: WHO guidelines for when to perform hand hygiene.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Safety and Ergonomics',
                        body: `
                            <h3>Patient Safety</h3>
                            <p>Preventing falls, medication errors, and hospital-acquired infections (HAIs).</p>
                            <ul>
                                <li><strong>Fall Prevention:</strong> Assess risk, keep call light within reach, use non-slip socks.</li>
                                <li><strong>Restraints:</strong> Use only as a last resort and follow strict protocols.</li>
                            </ul>

                            <h3>Body Mechanics</h3>
                            <p>Proper lifting techniques prevent back injury. Bend key knees, keep the load close, and avoid twisting.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Hygiene and Personal Care',
                        body: `
                            <h3>Purpose of Hygiene</h3>
                            <p>Promotes comfort, relaxation, and self-esteem. It also allows the nurse to assess the skin.</p>

                            <h3>Types of Baths</h3>
                            <ul>
                                <li><strong>Complete Bed Bath:</strong> Nurse washes the entire body of a dependent patient.</li>
                                <li><strong>Partial Bed Bath:</strong> Washing only excessive areas (face, hands, axillae, perineal area).</li>
                                <li><strong>Shower/Tub Bath:</strong> For independent patients.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Documentation',
                        body: `
                            <h3>Principles of Documentation</h3>
                            <p>"If it wasn't documented, it wasn't done."</p>
                            <ul>
                                <li><strong>Accuracy:</strong> Use precise measurements and approved abbreviations.</li>
                                <li><strong>Timeliness:</strong> Chart as soon as possible after care.</li>
                                <li><strong>Confidentiality:</strong> Adhere to HIPAA/Data Privacy laws.</li>
                            </ul>

                            <h3>Methods</h3>
                            <p>SOAP (Subjective, Objective, Assessment, Plan) and SBAR (Situation, Background, Assessment, Recommendation).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Theoretical Foundations',
                        body: `
                            <h3>Nursing Theories</h3>
                            <p>Theories provide a framework for nursing practice.</p>
                            <ul>
                                <li><strong>Orem:</strong> Self-Care Deficit Theory.</li>
                                <li><strong>Roy:</strong> Adaptation Model.</li>
                                <li><strong>Watson:</strong> Theory of Human Caring.</li>
                            </ul>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Maslow's Hierarchy of Needs</h4>
                                <img src="assets/maslow_nursing.png" alt="Maslow's Pyramid" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 10.1: Basic physiological needs must be met before higher-level needs.</p>
                            </div>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Fundamentals Final Quiz',
                        questions: [
                            { q: "Who is considered the founder of modern nursing?", options: ["Clara Barton", "Florence Nightingale", "Dorothea Orem", "Jean Watson"], correct: 1 },
                            { q: "Which of the following is the first step of the nursing process?", options: ["Diagnosis", "Planning", "Assessment", "Evaluation"], correct: 2 },
                            { q: "Normal adult pulse rate is:", options: ["40-60 bpm", "60-100 bpm", "80-120 bpm", "100-140 bpm"], correct: 1 },
                            { q: "Which ethical principle refers to the duty to do no harm?", options: ["Beneficence", "Veracity", "Non-maleficence", "Autonomy"], correct: 2 },
                            { q: "According to Maslow, which needs must be met first?", options: ["Safety", "Belonging", "Physiological", "Esteem"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Nursing Fundamentals',
                        questions: [
                            { q: "Which organization developed the first code of ethics for nurses?", options: ["American Nurses Association (ANA)", "National League for Nursing (NLN)", "World Health Organization (WHO)", "International Council of Nurses (ICN)"], correct: 0 },
                            { q: "The 'S' in SBAR communication stands for:", options: ["Subjective", "Situation", "Safety", "Standard"], correct: 1 },
                            { q: "Which position is best for a patient wishing to sleep but at risk for aspiration?", options: ["Supine", "Prone", "Semi-Fowler's", "Sims'"], correct: 2 },
                            { q: "Using the principles of body mechanics, the nurse should:", options: ["Bend at the waist", "Keep the load close to the body", "Twist while lifting", "Lift with the back muscles"], correct: 1 },
                            { q: "A patient's temperature is 39.5°C. This is termed:", options: ["Hypothermia", "Febrile (Pyrexia)", "Afebrile", "Hyperthermia"], correct: 1 },
                            { q: "Which of the following serves as a reservoir in the chain of infection?", options: ["The patient's bedside table", "Handwashing", "Gloves", "The exit portal"], correct: 0 },
                            { q: "The nurse is preparing to wash hands. The first step is to:", options: ["Apply soap", "Wet hands", "Dry hands", "Turn off faucet"], correct: 1 },
                            { q: "Which documentation method focuses only on abnormal findings?", options: ["Source-oriented", "Problem-oriented", "Charting by Exception", "Focus charting"], correct: 2 },
                            { q: "According to Orem's theory, the goal of nursing is:", options: ["To help the client achieve self-care", "To adapt to stimuli", "To care for the human spirit", "To interact with the environment"], correct: 0 },
                            { q: "Which vital sign is most indicative of hypovolemic shock?", options: ["Increased BP", "Decreased Pulse", "Increased Pulse (Tachycardia)", "Decreased Respiration"], correct: 2 },
                            { q: "What is the primary purpose of the health assessment?", options: ["To diagnose medical conditions", "To gather data to direct care", "To prescribe medication", "To bill the insurance"], correct: 1 },
                            { q: "Subjective data is data that is:", options: ["Measured by the nurse", "Observed by the family", "Reported by the patient", "Found in the chart"], correct: 2 },
                            { q: "Which assessment technique involves tapping to create sound?", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], correct: 2 },
                            { q: "A normal capillary refill time is:", options: ["< 3 seconds", "> 5 seconds", "10 seconds", "Immediately"], correct: 0 },
                            { q: "Which pulse site is used during CPR for an adult?", options: ["Radial", "Brachial", "Carotid", "Femoral"], correct: 2 },
                            { q: "The sequence of abdominal assessment is:", options: ["Inspect, Palpate, Percuss, Auscultate", "Inspect, Auscultate, Percuss, Palpate", "Palpate, Inspect, Percuss, Auscultate", "Auscultate, Inspect, Palpate, Percuss"], correct: 1 },
                            { q: "Which lung sound sounds like a high-pitched wheeze?", options: ["Crackles", "Rhonchi", "Wheezes", "Stridor"], correct: 2 },
                            { q: "Standard precautions apply to:", options: ["Only HIV positive patients", "Patients with infections", "All patients", "Surgical patients"], correct: 2 },
                            { q: "A nosocomial infection is one acquired:", options: ["At home", "In the hospital", "At school", "From a pet"], correct: 1 },
                            { q: "The most effective way to break the chain of infection is:", options: ["Antibiotics", "Isolation", "Hand hygiene", "Sterilization"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 2: Nursing Process & Documentation',
                        questions: [
                            { q: "Which step of the nursing process involves setting goals?", options: ["Assessment", "Diagnosis", "Planning", "Implementation"], correct: 2 },
                            { q: "The 'P' in SOAP charting stands for:", options: ["Problem", "Patient", "Plan", "Purpose"], correct: 2 },
                            { q: "A 'Smart' goal must be:", options: ["Spontaneous", "Measurable", "Abstract", "Really good"], correct: 1 },
                            { q: "Which of the following is an objective finding?", options: ["Pain rating 5/10", "Dizziness", "BP 120/80", "Nausea"], correct: 2 },
                            { q: "The etiology of a nursing diagnosis is the:", options: ["Sign and symptom", "Related factor/Cause", "Patient goal", "intervention"], correct: 1 },
                            { q: "Confidentiality of patient records is mandated by:", options: ["OSHA", "HIPAA", "CDC", "FDA"], correct: 1 },
                            { q: "Charting should be done:", options: ["Before care is given", "Immediately after care", "At the end of the shift only", "In pencil"], correct: 1 },
                            { q: "If an error is made in paper charting, the nurse should:", options: ["Erase it", "Use white-out", "Draw a single line through it and initial", "Black it out completely"], correct: 2 },
                            { q: "Focus charting uses the format:", options: ["SOAP", "PIE", "DAR (Data, Action, Response)", "SBAR"], correct: 2 },
                            { q: "Which phase of the nursing process involves performing the nursing interventions?", options: ["Assessment", "Evaluation", "Implementation", "Planning"], correct: 2 },
                            { q: "Evaluation determines:", options: ["If the diagnosis was correct", "If the goals were met", "The cost of care", "The medical diagnosis"], correct: 1 },
                            { q: "A collaborative intervention requires:", options: ["Nurse only", "Physician order or other team member", "Patient only", "Family permission"], correct: 1 },
                            { q: "Which is a priority nursing diagnosis?", options: ["Risk for constipation", "Ineffective Airway Clearance", "Anxiety", "Sleep deprivation"], correct: 1 },
                            { q: "Data clusters are used to:", options: ["Identify patterns", "Calculate bills", "Schedule staff", "Order pads"], correct: 0 },
                            { q: "A 'Risk' diagnosis has how many parts?", options: ["Two (Label + Risk factor)", "Three (Label + Etiology + Symptoms)", "One", "Four"], correct: 0 },
                            { q: "Which of the following is a barrier to effective documentation?", options: ["Use of computers", "Lack of time", "Standardized forms", "Patient participation"], correct: 1 },
                            { q: "Incident reports are:", options: ["Part of the patient's chart", "Internal risk management documents", "Given to the patient", "Sent to the insurance"], correct: 1 },
                            { q: "Narrative charting is:", options: ["Checklist based", "Story-like format", "Problem based", "By exception"], correct: 1 },
                            { q: "The primary purpose of the patient record is:", options: ["Research", "Communication", "Education", "Audit"], correct: 1 },
                            { q: "Kardex refers to:", options: ["A medication", "A concise summary of patient care/orders", "A type of lift", "A lab test"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 3: Safety & Physical Assessment',
                        questions: [
                            { q: "Which assessment finding indicates clubbing of fingers?", options: ["Angle > 180 degrees", "Pale nail beds", "Spoon-shaped nails", "Brittle nails"], correct: 0 },
                            { q: "A barrel chest is associated with:", options: ["Pneumonia", "COPD/Emphysema", "Heart failure", "Tuberculosis"], correct: 1 },
                            { q: "Which test assesses hearing?", options: ["Snellen", "Weber and Rinne", "Romberg", "Babinski"], correct: 1 },
                            { q: "Cranial Nerve II is the:", options: ["Olfactory", "Optic", "Oculomotor", "Vagus"], correct: 1 },
                            { q: "Bowel sounds are hyperactive if heard:", options: ["Every 5-15 seconds", "> 35 times per minute", "Absent for 5 minutes", "After eating only"], correct: 1 },
                            { q: "Edema that leaves an indentation is called:", options: ["Brawny edema", "Pitting edema", "Anasarca", "Ascites"], correct: 1 },
                            { q: "PERRLA refers to assessment of the:", options: ["Ears", "Eyes", "Nose", "Mouth"], correct: 1 },
                            { q: "The correct size of a BP cuff bladder should cover:", options: ["40% of arm circumference", "80% of arm circumference", "100% of arm circumference", "20% of arm circumference"], correct: 1 },
                            { q: "Restraints should be removed/checked at least every:", options: ["4 hours", "2 hours", "8 hours", "24 hours"], correct: 1 },
                            { q: "Which fire extinguisher is used for electrical fires?", options: ["Type A", "Type B", "Type C", "Water"], correct: 2 },
                            { q: "PASS stands for:", options: ["Pull, Aim, Squeeze, Sweep", "Push, Aim, Shoot, Stop", "Pull, Arm, Spray, Stop", "Plan, Assess, Safe, Secure"], correct: 0 },
                            { q: "RACE stands for:", options: ["Run, Alarm, Call, Exit", "Rescue, Alarm, Confine, Extinguish", "Rescue, Assess, Clean, Evacuate", "React, Act, Call, End"], correct: 1 },
                            { q: "The most common cause of hospital accidents is:", options: ["Burns", "Falls", "Cuts", "Poisoning"], correct: 1 },
                            { q: "A bedridden patient should be turned every:", options: ["4 hours", "2 hours", "Shift", "Day"], correct: 1 },
                            { q: "Which position is used for shock (Trendelenburg)?", options: ["Head up, feet down", "Feet up, head down", "Flat", "Side lying"], correct: 1 },
                            { q: "Assessment of the skin turgor checks for:", options: ["Edema", "Dehydration", "Infection", "Bruising"], correct: 1 },
                            { q: "Jaundice is best observed in the:", options: ["Sclera", "Nails", "Lips", "Hair"], correct: 0 },
                            { q: "A bruit indicates:", options: ["Normal flow", "Turbulent blood flow", "Blocked flow", "Venous hum"], correct: 1 },
                            { q: "Which scale predicts pressure ulcer risk?", options: ["Glasgow", "Braden", "Morse", "Pain"], correct: 1 },
                            { q: "Which scale predicts fall risk?", options: ["Glasgow", "Braden", "Morse", "Pain"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 4: Infection Control & Hygiene',
                        questions: [
                            { q: "Medical asepsis is also known as:", options: ["Sterile technique", "Clean technique", "Surgical asepsis", "Disinfection"], correct: 1 },
                            { q: "Surgical asepsis is:", options: ["Clean technique", "Sterile technique", "Hand washing", "Isolation"], correct: 1 },
                            { q: "Which organism causes thrush?", options: ["E. coli", "Candida albicans", "Staph aureus", "Streptococcus"], correct: 1 },
                            { q: "Droplet precautions require:", options: ["N95 mask", "Surgical mask within 3ft", "Gloves only", "Negative pressure room"], correct: 1 },
                            { q: "Airborne precautions require:", options: ["N95 mask/Respirator", "Surgical mask", "Gown only", "No mask"], correct: 0 },
                            { q: "Which of the following is an HAI (Healthcare Associated Infection)?", options: ["Flu from home", "CAUTI (Catheter Associated UTI)", "Broken leg", "Cancer"], correct: 1 },
                            { q: "Personal Protective Equipment (PPE) is removed:", options: ["Inside the room (except mask)", "Outside the room", "At the nurses station", "In the cafeteria"], correct: 0 },
                            { q: "Oral care for an unconscious patient presents a risk of:", options: ["Aspiration", "Vomiting", "Bleeding", "Dry mouth"], correct: 0 },
                            { q: "Which area is washed first during a bed bath?", options: ["Feet", "Face/Eyes", "Chest", "Perineum"], correct: 1 },
                            { q: "When cleaning the eyes, wipe from:", options: ["Outer to inner canthus", "Inner to outer canthus", "Up to down", "Down to up"], correct: 1 },
                            { q: "Foot care for diabetics involves:", options: ["Soaking feet daily", "Applying lotion between toes", "Inspecting daily for sores", "Cutting nails very short"], correct: 2 },
                            { q: "Clostridium difficile (C. diff) requires:", options: ["Alcohol sanitizer", "Soap and water handwashing", "Surgical scrub", "Betadine"], correct: 1 },
                            { q: "A sterile field is considered contaminated if:", options: ["It is above waist level", "It gets wet", "You look at it", "You touch the 1-inch border"], correct: 1 }, // 2 correct options generally? Wet is definitely contaminated.
                            { q: "Which sterilization method kills spores?", options: ["Boiling", "Autoclaving", "Alcohol", "Bleach"], correct: 1 },
                            { q: "Standard precautions dictate that needles should be:", options: ["Recapped", "Broken", "Placed in sharps container uncapped", "Bent"], correct: 2 },
                            { q: "Gingivitis is inflammation of the:", options: ["Tongue", "Gums", "Lips", "Teeth"], correct: 1 },
                            { q: "Pediculosis capitis refers to:", options: ["Head lice", "Body lice", "Crabs", "Ringworm"], correct: 0 },
                            { q: "Decubitus ulcers are caused by:", options: ["Friction", "Pressure", "Shear", "All of the above"], correct: 3 },
                            { q: "The purpose of reverse (protective) isolation is to:", options: ["Protect the staff from the patient", "Protect the patient from the environment", "Protect other patients", "Punish the patient"], correct: 1 },
                            { q: "Which is a sign of localized infection?", options: ["Fever", "Redness and swelling", "Leukocytosis", "Malaise"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 5: Therapeutic Communication & Ethics',
                        questions: [
                            { q: "Which technique involves repeating the main idea?", options: ["Restating", "Reflecting", "Exploring", "Focusing"], correct: 0 },
                            { q: "Asking 'Why' questions is considered:", options: ["Therapeutic", "Non-therapeutic", "Essential", "Polite"], correct: 1 },
                            { q: "Silence can be therapeutic because it:", options: ["Allows the patient time to think", "Let's the nurse rest", "shows authority", "Ends the conversation"], correct: 0 },
                            { q: "Which value is the duty to keep promises?", options: ["Veracity", "Fidelity", "Justice", "Autonomy"], correct: 1 },
                            { q: "A Living Will is a type of:", options: ["Advance Directive", "Insurance", "Tort", "Contract"], correct: 0 },
                            { q: "Defamation of character in writing is:", options: ["Slander", "Libel", "Assault", "Battery"], correct: 1 },
                            { q: "Spoken defamation is:", options: ["Slander", "Libel", "Assault", "Battery"], correct: 0 },
                            { q: "The Good Samaritan Law protects nurses who:", options: ["Work in hospitals", "Give emergency care outside the workplace in good faith", "Make mistakes", "Prescribe meds"], correct: 1 },
                            { q: "Empathy is:", options: ["Feeling sorry for the patient", "Understanding the patient's feelings", "Ignoring feelings", "Giving advice"], correct: 1 },
                            { q: "Which phase of the relationship involves establishing trust?", options: ["Orientation", "Working", "Termination", "Pre-interaction"], correct: 0 },
                            { q: "Transference occurs when:", options: ["The nurse displaces feelings onto the patient", "The patient displaces feelings onto the nurse", "The patient moves rooms", "Care is transferred"], correct: 1 },
                            { q: "Active listening involves:", options: ["Talking over the patient", "Using all senses to interpret the message", "Writing notes only", "Thinking of the next question"], correct: 1 },
                            { q: "Providing false reassurance ('It will be okay') is:", options: ["Helpful", "Non-therapeutic", "Standard practice", "Kind"], correct: 1 },
                            { q: "Using touch should be:", options: ["Avoided always", "Used cautiously and appropriately", "Used on everyone", "Only for family"], correct: 1 },
                            { q: "Which ethical theory focuses on the greatest good for the greatest number?", options: ["Deontology", "Utilitarianism", "Feminist ethics", "Virtue ethics"], correct: 1 },
                            { q: "Paternalism is:", options: ["Treating the patient like a child/making decisions for them", "Respecting autonomy", "Being a father", "Listening"], correct: 0 },
                            { q: "Battery is:", options: ["Threat of harm", "Actual physical contact without consent", "Lying", "Stealing"], correct: 1 },
                            { q: "Informed consent is primarily the responsibility of the:", options: ["Nurse", "Provider/Physician", "Hospital Admin", "Family"], correct: 1 },
                            { q: "The nurse witnesses the signature on a consent form found to be confused. The nurse should:", options: ["Let them sign", "Hold the form and notify the provider", "Sign for them", "Ask the family to sign immediately"], correct: 1 },
                            { q: "Values clarification helps the nurse to:", options: ["Change the patient's values", "Understand their own values", "Judge the patient", "Ignore values"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 6: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 7: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 8: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 9: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 10: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 10102,
                code: "NUR 101",
                title: "Human Physiology 1",
                icon: "ph-heart-beat",
                completed: false,
                description: "Study of the functions of the human body, focusing on homeostasis, cell physiology, and major organ system functions.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Physiology',
                        body: `
                            <h3>What is Physiology?</h3>
                            <p>Physiology is the study of how the body parts work and functions. It complements anatomy (structure).</p>

                            <h4>Homeostasis</h4>
                            <p>Homeostasis is the maintenance of relatively stable internal conditions despite continuous changes in the environment. It is dynamic, not static.</p>
                            <ul>
                                <li><strong>Negative Feedback:</strong> The response reduces or shuts off the original stimulus (e.g., Body temperature regulation, Blood glucose).</li>
                                <li><strong>Positive Feedback:</strong> The response enhances or exaggerates the original stimulus (e.g., Labor contractions, Blood clotting).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Cell Physiology',
                        body: `
                            <h3>Membrane Transport</h3>
                            <p>The plasma membrane is selectively permeable, allowing some substances to pass while excluding others.</p>

                            <h4>Passive Transport processes</h4>
                            <ul>
                                <li><strong>Diffusion:</strong> Movement of molecules from high to low concentration.</li>
                                <li><strong>Osmosis:</strong> Diffusion of water across a semi-permeable membrane.</li>
                                <li><strong>Facilitated Diffusion:</strong> Uses carrier or channel proteins.</li>
                            </ul>

                            <h4>Active Transport</h4>
                            <p>Requires energy (ATP) to move solutes against their concentration gradient (Low to High).</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cell Membrane Transport Mechanisms</h4>
                                <img src="assets/cell_transport.png" alt="Cell Transport Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Illustration of diffusion, channel proteins, and active transport pumps.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Neurophysiology',
                        body: `
                            <h3>The Action Potential</h3>
                            <p>Neurons communicate via electrical signals called action potentials.</p>
                            <ol>
                                <li><strong>Resting State:</strong> -70mV. Na+ and K+ channels closed.</li>
                                <li><strong>Depolarization:</strong> Na+ channels open, Na+ rushes in. Interior becomes positive.</li>
                                <li><strong>Repolarization:</strong> Na+ channels close, K+ channels open, K+ rushes out. Interior becomes negative again.</li>
                                <li><strong>Hyperpolarization:</strong> K+ permeability persists too long.</li>
                            </ol>

                            <h3>Synaptic Transmission</h3>
                            <p>Communication between neurons occurs at the synapse using neurotransmitters.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Chemical Synapse</h4>
                                <img src="assets/synapse.png" alt="Synapse Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Release of neurotransmitters into the synaptic cleft.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Muscle Physiology',
                        body: `
                            <h3>Excitation-Contraction Coupling</h3>
                            <p>The sequence of events by which transmission of an action potential along the sarcolemma causes sliding of myofilaments.</p>
                            <ul>
                                <li>calcium ions (Ca2+) are the trigger.</li>
                                <li>Ca2+ binds to troponin, removing the blocking action of tropomyosin.</li>
                                <li>Myosin heads bind to actin (Formation of Cross-bridge).</li>
                                <li>Power stroke occurs, filaments slide.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Cardiovascular Physiology',
                        body: `
                            <h3>The Cardiac Cycle</h3>
                            <p>Blood flow through the heart during one complete heartbeat.</p>
                            <ul>
                                <li><strong>Systole:</strong> Contraction phase.</li>
                                <li><strong>Diastole:</strong> Relaxation phase.</li>
                            </ul>

                            <h3>Electrical Conduction System</h3>
                            <p>The heart has an intrinsic system to set the pace.</p>
                            <ol>
                                <li>Sinoatrial (SA) Node - The "Pacemaker" (75 bpm).</li>
                                <li>Atrioventricular (AV) Node - Delays impulse.</li>
                                <li>Atrioventricular Bundle (Bundle of His).</li>
                                <li>Purkinje Fibers - Causes ventricular depolarization.</li>
                            </ol>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cardiac Conduction System</h4>
                                <img src="assets/cardiac_system.png" alt="Heart Conduction Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Path of electrical impulses through the heart.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Blood Pressure & Hemodynamics',
                        body: `
                            <h3>Blood Pressure (BP)</h3>
                            <p>Force per unit area exerted on the wall of a blood vessel by the blood. Normal is < 120/80 mmHg.</p>
                            <ul>
                                <li><strong>Systolic Pressure:</strong> Pressure in aorta during ventricular contraction.</li>
                                <li><strong>Diastolic Pressure:</strong> Lowest level of aortic pressure.</li>
                            </ul>

                            <h3>Factors Influencing BP</h3>
                            <p>BP = Cardiac Output (CO) x Peripheral Resistance (PR)</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Respiratory Physiology',
                        body: `
                            <h3>Mechanics of Breathing</h3>
                            <ul>
                                <li><strong>Inspiration:</strong> Active process. Diaphragm and external intercostals contract. Thoracic volume increases, pressure drops, air rushes in.</li>
                                <li><strong>Expiration:</strong> Passive process. Muscles relax, lungs recoil.</li>
                            </ul>

                            <h3>Gas Exchange</h3>
                            <p>Occurs via simple diffusion.</p>
                            <ul>
                                <li><strong>External Respiration:</strong> Exchange between alveoli and blood.</li>
                                <li><strong>Internal Respiration:</strong> Exchange between blood and tissues.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Renal Physiology',
                        body: `
                            <h3>Urine Formation</h3>
                            <ol>
                                <li><strong>Glomerular Filtration:</strong> Passive process; hydrostatic pressure forces fluids/solutes through membrane.</li>
                                <li><strong>Tubular Reabsorption:</strong> Returns 99% of substances from filtrate to blood (e.g., Glucose, Water).</li>
                                <li><strong>Tubular Secretion:</strong> Moves substances from blood to filtrate (e.g., K+, H+, drugs).</li>
                            </ol>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Endocrine Physiology',
                        body: `
                            <h3>Hormone Action</h3>
                            <ul>
                                <li><strong>Water-soluble hormones:</strong> (e.g., Insulin) Act on receptors in the plasma membrane. Use second messengers.</li>
                                <li><strong>Lipid-soluble hormones:</strong> (e.g., Steroids) Act on receptors inside the cell. Directly activate genes.</li>
                            </ul>

                            <h3>Key Axes</h3>
                            <p>Hypothalamus-Pituitary-Adrenal (HPA) Axis regulates stress response (Cortisol).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Reproductive Physiology',
                        body: `
                            <h3>Male Physiology</h3>
                            <p>Spermatogenesis occurs in seminiferous tubules. Testosterone regulates sperm production and secondary sex characteristics.</p>

                            <h3>Female Physiology</h3>
                            <p>Ovarian Cycle (Follicular, Ovulation, Luteal phases) and Uterine Cycle (Menstrual, Proliferative, Secretory phases) are regulated by LH, FSH, Estrogen, and Progesterone.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Physiology Final Quiz',
                        questions: [
                            { q: "Which process uses ATP to move substances against a gradient?", options: ["Diffusion", "Osmosis", "Active Transport", "Filtration"], correct: 2 },
                            { q: "What is the 'pacemaker' of the heart?", options: ["AV Node", "SA Node", "Bundle of His", "Vagus Nerve"], correct: 1 },
                            { q: "In a neuron, which phase immediately follows depolarization?", options: ["Resting state", "Hyperpolarization", "Repolarization", "Refractory period"], correct: 2 },
                            { q: "Which hormone lowers blood glucose levels?", options: ["Glucagon", "Insulin", "Cortisol", "Epinephrine"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Physiology Basics',
                        questions: [
                            { q: "The maintenance of a stable internal environment is called:", options: ["Metabolism", "Homeostasis", "Positive Feedback", "Equilibrium"], correct: 1 },
                            { q: "Which transport mechanism requires ATP?", options: ["Diffusion", "Osmosis", "Facilitated Diffusion", "Active Transport"], correct: 3 },
                            { q: "The resting membrane potential of a neuron is approximately:", options: ["-55mV", "-70mV", "+30mV", "0mV"], correct: 1 },
                            { q: "Which ion is responsible for triggering neurotransmitter release?", options: ["Sodium", "Potassium", "Calcium", "Chloride"], correct: 2 },
                            { q: "The pacemaker of the heart is the:", options: ["AV Node", "Bundle of His", "Purkinje Fibers", "SA Node"], correct: 3 },
                            { q: "Which variable has the greatest effect on blood flow resistance?", options: ["Blood viscosity", "Vessel length", "Vessel radius", "Blood pressure"], correct: 2 },
                            { q: "Gas exchange in the lungs occurs in the:", options: ["Bronchi", "Trachea", "Alveoli", "Bronchioles"], correct: 2 },
                            { q: "During depolarization, which ion channels open?", options: ["Potassium", "Sodium", "Calcium", "Chloride"], correct: 1 },
                            { q: "Which blood component is responsible for oxygen transport?", options: ["Platelets", "Leukocytes", "Erythrocytes", "Plasma"], correct: 2 },
                            { q: "Cardiac Output is calculated as:", options: ["Stroke Volume x Heart Rate", "BP / Resistance", "Heart Rate x Resistance", "Stroke Volume / BP"], correct: 0 },
                            { q: "Which feedback loop strengthens the initial stimulus?", options: ["Negative feedback", "Positive feedback", "Neutral feedback", "Inverse feedback"], correct: 1 },
                            { q: "The movement of water across a semi-permeable membrane is:", options: ["Diffusion", "Osmosis", "Filtration", "Active transport"], correct: 1 },
                            { q: "Which organelle synthesizes proteins?", options: ["Mitochondria", "Ribosome", "Lysosome", "Golgi"], correct: 1 },
                            { q: "The breakdown of glucose to produce ATP is called:", options: ["Gluconeogenesis", "Glycolysis", "Glycogenesis", "Lipolysis"], correct: 1 },
                            { q: "Which fluid compartment contains the most water?", options: ["Intracellular Fluid (ICF)", "Extracellular Fluid (ECF)", "Plasma", "Lymph"], correct: 0 },
                            { q: "What is the primary extracellular cation?", options: ["Potassium", "Sodium", "Calcium", "Magnesium"], correct: 1 },
                            { q: "What is the primary intracellular cation?", options: ["Potassium", "Sodium", "Calcium", "Magnesium"], correct: 0 },
                            { q: "The pH of human blood is typically:", options: ["7.0", "7.35 - 7.45", "6.8", "7.8"], correct: 1 },
                            { q: "Which tissue type generates force?", options: ["Epithelial", "Connective", "Muscle", "Nervous"], correct: 2 },
                            { q: "The study of the function of body parts is called:", options: ["Anatomy", "Physiology", "Histology", "Cytology"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 2: Neuro & Cell Physiology',
                        questions: [
                            { q: "Which part of the neuron receives signals?", options: ["Axon", "Dendrite", "Soma", "Terminal"], correct: 1 },
                            { q: "Repolarization occurs due to the outflow of:", options: ["Sodium", "Potassium", "Calcium", "Chloride"], correct: 1 },
                            { q: "Saltatory conduction occurs in:", options: ["Unmyelinated axons", "Myelinated axons", "Dendrites", "Muscle fibers"], correct: 1 },
                            { q: "Which neurotransmitter is inhibitory?", options: ["Glutamate", "GABA", "Acetylcholine", "Norepinephrine"], correct: 1 },
                            { q: "The junction between two neurons is the:", options: ["Gap", "Synapse", "Desmosome", "Bridge"], correct: 1 },
                            { q: "Which lobe of the brain processes visual information?", options: ["Frontal", "Parietal", "Occipital", "Temporal"], correct: 2 },
                            { q: "The 'emotional brain' is the:", options: ["Limbic system", "Brainstem", "Cerebellum", "Cortex"], correct: 0 },
                            { q: "Which brain area controls speech production?", options: ["Wernicke's area", "Broca's area", "Visual cortex", "Sensory cortex"], correct: 1 },
                            { q: "The sodium-potassium pump moves:", options: ["3 Na+ in, 2 K+ out", "3 Na+ out, 2 K+ in", "2 Na+ out, 3 K+ in", "Equal amounts"], correct: 1 },
                            { q: "Phagocytosis is a type of:", options: ["Exocytosis", "Endocytosis", "Passive transport", "Diffusion"], correct: 1 },
                            { q: "Which organelle contains digestive enzymes?", options: ["Ribosome", "Lysosome", "Mitochondria", "Nucleus"], correct: 1 },
                            { q: "The blood-brain barrier is formed mainly by:", options: ["Neurons", "Astrocytes", "Microglia", "Ependymal cells"], correct: 1 },
                            { q: "Which reflex prevents a muscle from over-stretching?", options: ["Withdrawal reflex", "Stretch reflex", "Golgi tendon reflex", "Crossed extensor reflex"], correct: 1 },
                            { q: "The autonomic nervous system controls:", options: ["Voluntary muscle", "Involuntary muscle and glands", "Sensory perception", "Cognitive thought"], correct: 1 },
                            { q: "Sympathetic stimulation results in:", options: ["Pupil constriction", "Decreased heart rate", "Bronchodilation", "Increased digestion"], correct: 2 },
                            { q: "Parasympathetic stimulation results in:", options: ["Pupil dilation", "Increased heart rate", "Bronchoconstriction", "Decreased digestion"], correct: 2 },
                            { q: "Which receptor type detects pain?", options: ["Thermoreceptor", "Mechanoreceptor", "Nociceptor", "Photoreceptor"], correct: 2 },
                            { q: "The sense of balance is detected in the:", options: ["Cochlea", "Vestibular apparatus", "Middle ear", "Outer ear"], correct: 1 },
                            { q: "Cones in the retina are responsible for:", options: ["Night vision", "Color vision", "Peripheral vision", "Motion detection"], correct: 1 },
                            { q: "The 'blind spot' is where the:", options: ["Lens focuses light", "Optic nerve exits the eye", "Choroid layer is missing", "Iris attaches"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 3: Cardiovascular & Repiratory',
                        questions: [
                            { q: "Systole refers to:", options: ["Relaxation", "Contraction", "Filling", "Resting"], correct: 1 },
                            { q: "Which vessel carries deoxygenated blood to the lungs?", options: ["Pulmonary vein", "Pulmonary artery", "Aorta", "Vena cava"], correct: 1 },
                            { q: "The 'Dubb' sound (S2) of the heart is caused by:", options: ["Closing of AV valves", "Closing of Semilunar valves", "Opening of AV valves", "Blood filling ventricles"], correct: 1 },
                            { q: "Stroke Volume (SV) is:", options: ["Volume of blood pumped per minute", "Volume of blood pumped per beat", "Volume of blood in the heart", "Heart rate"], correct: 1 },
                            { q: "Which hormone increases blood pressure by retaining water?", options: ["ANP", "ADH (Vasopressin)", "Insulin", "Thyroxine"], correct: 1 },
                            { q: "Frank-Starling Law states that:", options: ["More stretch = weaker contraction", "More stretch = stronger contraction", "Heart rate controls output", "Pressure equals flow"], correct: 1 },
                            { q: "Which blood type is the universal donor?", options: ["Type A", "Type B", "Type AB", "Type O Negative"], correct: 3 },
                            { q: "Hemoglobin carries oxygen by binding to:", options: ["Copper", "Iron", "Zinc", "Calcium"], correct: 1 },
                            { q: "Gas exchange occurs across the respiratory membrane via:", options: ["Active transport", "Simple diffusion", "Facilitated diffusion", "Osmosis"], correct: 1 },
                            { q: "Surfactant prevents alveolar collapse by:", options: ["Increasing surface tension", "Decreasing surface tension", "Drying the alveoli", "Humidifying air"], correct: 1 },
                            { q: "The primary chemical stimulus for breathing is:", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 1 },
                            { q: "Hypoxia refers to:", options: ["Low CO2", "High CO2", "Low Oxygen", "High Oxygen"], correct: 2 },
                            { q: "The volume of air moved in/out during normal breathing is:", options: ["Vital capacity", "Tidal volume", "Residual volume", "Total lung capacity"], correct: 1 },
                            { q: "Which part of the brain sets the respiratory rhythm?", options: ["Cerebrum", "Medulla Oblongata", "Cerebellum", "Thalamus"], correct: 1 },
                            { q: "Most CO2 is transported in the blood as:", options: ["Dissolved CO2", "Carbaminohemoglobin", "Bicarbonate ion", "Carbonic acid"], correct: 2 },
                            { q: "Which vessel returns oxygenated blood to the heart?", options: ["Pulmonary artery", "Pulmonary vein", "Vena Cava", "Aorta"], correct: 1 },
                            { q: "Which layer of the heart wall is muscular?", options: ["Epicardium", "Myocardium", "Endocardium", "Pericardium"], correct: 1 },
                            { q: "Which valve is located between the left atrium and ventricle?", options: ["Tricuspid", "Mitral (Bicuspid)", "Pulmonary", "Aortic"], correct: 1 },
                            { q: "What is the normal pacemaker firing rate?", options: ["40-60 bpm", "60-100 bpm", "100-120 bpm", "20-40 bpm"], correct: 1 },
                            { q: "A drop in pH (acidosis) causes hemoglobin to:", options: ["Bind O2 tighter", "Release O2 more readily (Bohr effect)", "Stop binding O2", "Destroy red cells"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 4: Renal & Digestive',
                        questions: [
                            { q: "The functional unit of the kidney is the:", options: ["Glomerulus", "Nephron", "Calyx", "Ureter"], correct: 1 },
                            { q: "Filtration occurs in the:", options: ["Loop of Henle", "Glomerulus", "Distal tubule", "Collecting duct"], correct: 1 },
                            { q: "Most reabsorption occurs in the:", options: ["Proximal Convoluted Tubule (PCT)", "Loop of Henle", "Distal Convoluted Tubule (DCT)", "Collecting duct"], correct: 0 },
                            { q: "ADH acts on the collecting duct to:", options: ["Excrete water", "Reabsorb water", "Excrete sodium", "Reabsorb glucose"], correct: 1 },
                            { q: "Which enzyme begins carbohydrate digestion in the mouth?", options: ["Pepsin", "Amylase", "Lipase", "Trypsin"], correct: 1 },
                            { q: "Which acid is found in the stomach?", options: ["Sulfuric acid", "Hydrochloric acid (HCl)", "Acetic acid", "Citric acid"], correct: 1 },
                            { q: "Bile is produced by the _____ and stored in the _____.", options: ["Gallbladder, Liver", "Liver, Gallbladder", "Pancreas, Liver", "Stomach, Pancreas"], correct: 1 },
                            { q: "Most nutrient absorption occurs in the:", options: ["Stomach", "Small Intestine", "Large Intestine", "Esophagus"], correct: 1 },
                            { q: "The large intestine primarily absorbs:", options: ["Proteins", "Fats", "Water and Vitamin K", "Carbohydrates"], correct: 2 },
                            { q: "Which hormone stimulates stomach acid secretion?", options: ["Secretin", "CCK", "Gastrin", "Insulin"], correct: 2 },
                            { q: "Renin is released by the kidney in response to:", options: ["High BP", "Low BP", "High Sodium", "Low Potassium"], correct: 1 },
                            { q: "The GFR (Glomerular Filtration Rate) is a measure of:", options: ["Liver function", "Kidney function", "Heart function", "Lung function"], correct: 1 },
                            { q: "Peristalsis is:", options: ["Mechanical chewing", "Wave-like muscle contractions", "Enzymatic breakdown", "Absorption"], correct: 1 },
                            { q: "The sphincter between the stomach and small intestine is the:", options: ["Cardiac", "Pyloric", "Anal", "Ileocecal"], correct: 1 },
                            { q: "Which vitamin is synthesized by bacteria in the gut?", options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin A"], correct: 2 },
                            { q: "Aldosterone causes the kidneys to reabsorb:", options: ["Potassium", "Sodium", "Calcium", "Hydrogen"], correct: 1 },
                            { q: "Glucose in the urine (Glucosuria) indicates:", options: ["Diabetes Insipidus", "Diabetes Mellitus", "Kidney Stones", "Infection"], correct: 1 },
                            { q: "Micturition refers to:", options: ["Swallowing", "Urination", "Defecation", "Vomiting"], correct: 1 },
                            { q: "Which organ produces Trypsin, Lipase, and Amylase?", options: ["Liver", "Stomach", "Pancreas", "Gallbladder"], correct: 2 },
                            { q: "Intrinsic Factor is necessary for the absorption of:", options: ["Vitamin C", "Vitamin B12", "Iron", "Calcium"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 5: Endocrine & Reproductive',
                        questions: [
                            { q: "Steroid hormones interact with receptors:", options: ["On the cell membrane", "Inside the cell (intracellular)", "In the blood", "In the mitochondria"], correct: 1 },
                            { q: "Hyposecretion of GH in childhood causes:", options: ["Gigantism", "Acromegaly", "Dwarfism", "Cushing's"], correct: 2 },
                            { q: "Which hormone triggers ovulation?", options: ["FSH", "LH (Luteinizing Hormone)", "Estrogen", "Progesterone"], correct: 1 },
                            { q: "Where does fertilization typically occur?", options: ["Ovary", "Uterus", "Fallopian Tube", "Vagina"], correct: 2 },
                            { q: "The corpus luteum secretes primarily:", options: ["Estrogen", "Progesterone", "LH", "FSH"], correct: 1 },
                            { q: "Sperm are stored and mature in the:", options: ["Seminiferous tubules", "Epididymis", "Vas deferens", "Prostate"], correct: 1 },
                            { q: "Menstruation is triggered by:", options: ["High Estrogen", "High Progesterone", "Drop in Estrogen and Progesterone", "Surge in LH"], correct: 2 },
                            { q: "The inner lining of the uterus is the:", options: ["Myometrium", "Perimetrium", "Endometrium", "Epimetrium"], correct: 2 },
                            { q: "Oxytocin operates via a _____ feedback loop during labor.", options: ["Negative", "Positive", "Neutral", "Inhibitory"], correct: 1 },
                            { q: "Which hormone prepares the breast for lactation?", options: ["Prolactin", "Oxytocin", "Estrogen", "Cortisol"], correct: 0 },
                            { q: "Parathyroid Hormone (PTH) targets which cells to raise calcium?", options: ["Osteoblasts", "Osteoclasts", "Chondrocytes", "Myocytes"], correct: 1 },
                            { q: "Melatonin is produced by the:", options: ["Pituitary", "Pineal gland", "Thyroid", "Thymus"], correct: 1 },
                            { q: "Type II Diabetes is primarily caused by:", options: ["Autoimmune destruction", "Insulin resistance", "Lack of insulin", "Virus"], correct: 1 },
                            { q: "HCG is produced by the:", options: ["Ovary", "Pituitary", "Placenta/Embryo", "Uterus"], correct: 2 },
                            { q: "The acrosome of the sperm contains:", options: ["Mitochondria", "DNA", "Enzymes to penetrate the egg", "Sugar"], correct: 2 },
                            { q: "Which structure releases the egg?", options: ["Follicle", "Tube", "Cervix", "Corpus Albicans"], correct: 0 },
                            { q: "Menopause is defined as:", options: ["Irregular periods", "One year without a period", "First period", "Painful periods"], correct: 1 },
                            { q: "Which hormone causes the liver to release glucose?", options: ["Insulin", "Glucagon", "Calcitonin", "Aldosterone"], correct: 1 },
                            { q: "Cortisol is a:", options: ["Mineralocorticoid", "Glucocorticoid", "Androgen", "Estrogen"], correct: 1 },
                            { q: "Which gland disappears (atrophies) in adulthood?", options: ["Thyroid", "Thymus", "Pineal", "Adrenal"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 6: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 7: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 8: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 9: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 10: Coming Soon',
                        questions: [
                            { q: "This quiz bank is under development. Check back later!", options: ["Back to Menu"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 10103,
                code: "NUR 108",
                title: "Professionalism in Nursing",
                icon: "ph-briefcase",
                completed: false,
                description: "Exploration of the roles, responsibilities, ethical standards, and communication skills required for professional nursing practice.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Definition of a Profession',
                        body: `
                            <h3>Nursing as a Profession</h3>
                            <p>Nursing is more than a job; it is a profession characterized by:</p>
                            <ul>
                                <li>A specialized body of knowledge.</li>
                                <li>Higher education.</li>
                                <li>Service to society.</li>
                                <li>Autonomy and self-regulation.</li>
                                <li>A code of ethics.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Core Values of Nursing',
                        body: `
                            <h3>The Foundation of Practice</h3>
                            <p>Professional nurses integrate core values into their interaction with patients and colleagues.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Core Nursing Values</h4>
                                <img src="assets/values.png" alt="Core Values Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Values such as Caring, Integrity, Diversity, and Excellence uphold the profession.</p>
                            </div>

                            <ul>
                                <li><strong>Altruism:</strong> Concern for the welfare of others.</li>
                                <li><strong>Human Dignity:</strong> Respect for the inherent worth of individuals.</li>
                                <li><strong>Integrity:</strong> Acting in accordance with standards and ethics.</li>
                                <li><strong>Social Justice:</strong> Upholding moral, legal, and humanistic principles.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Code of Ethics',
                        body: `
                            <h3>ICN and ANA Codes</h3>
                            <p>The Code of Ethics provides a guide for carrying out nursing responsibilities relative to quality in nursing care and ethical obligations.</p>
                            <p>Key provisions include practicing with compassion, primary commitment to the patient, and accountability for practice.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Professional Communication',
                        body: `
                            <h3>Effective Communication</h3>
                            <p>Clear, direct, and timely communication prevents errors and ensures patient safety.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The SBAR Tool</h4>
                                <img src="assets/sbar.png" alt="SBAR Communication Tool" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Standardized framework for interdisciplinary communication.</p>
                            </div>

                            <ul>
                                <li><strong>Situation:</strong> What is happening right now?</li>
                                <li><strong>Background:</strong> What is the clinical context?</li>
                                <li><strong>Assessment:</strong> What do I think the problem is?</li>
                                <li><strong>Recommendation:</strong> What do I do to correct it?</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Roles of the Professional Nurse',
                        body: `
                            <h3>Beyond Bedside Care</h3>
                            <p>Nurses assume multiple multifaceted roles depending on the setting and needs of the patient.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Multifaceted Roles</h4>
                                <img src="assets/roles.png" alt="Roles of Nurse Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Caregiver, Advocate, Educator, Leader, and more.</p>
                            </div>

                            <ul>
                                <li><strong>Caregiver:</strong> Addressing physical, emotional, and social needs.</li>
                                <li><strong>Advocate:</strong> Protecting the patient's human and legal rights.</li>
                                <li><strong>Educator:</strong> Teaching patients about their health.</li>
                                <li><strong>Leader/Manager:</strong> Coordinating care and resources.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Therapeutic Relationships',
                        body: `
                            <h3>Nurse-Patient Relationship</h3>
                            <p>A professional, goal-oriented relationship focused on the patient's needs.</p>
                            <ul>
                                <li><strong>Pre-interaction Phase:</strong> Reviewing data.</li>
                                <li><strong>Orientation Phase:</strong> Setting tone and goals.</li>
                                <li><strong>Working Phase:</strong> Working together to meet goals.</li>
                                <li><strong>Termination Phase:</strong> Evaluating and concluding.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Cultural Competence',
                        body: `
                            <h3>Providing Culturally Sensitive Care</h3>
                            <p>Understanding and respecting the cultural beliefs, values, and practices of patients.</p>
                            <p>This includes being aware of one's own biases and adapting care to meet the patient's cultural needs (e.g., diet, modesty, family involvement).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Evidence-Based Practice (EBP)',
                        body: `
                            <h3>Integrating Best Evidence</h3>
                            <p>EBP is a problem-solving approach that integrates the best current evidence with clinical expertise and patient values/preferences.</p>
                            <p>Steps: Ask clinical question (PICO), Search evidence, Appraise evidence, Integrate, Evaluate.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Legal Responsibilities',
                        body: `
                            <h3>Accountability and Liability</h3>
                            <ul>
                                <li><strong>Informed Consent:</strong> Ensuring the patient understands risks/benefits before treatment.</li>
                                <li><strong>HIPAA:</strong> Protecting patient privacy and health information.</li>
                                <li><strong>Mandatory Reporting:</strong> Reporting abuse, neglect, or communicable diseases.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Career Development',
                        body: `
                            <h3>Lifelong Learning</h3>
                            <p>Medicine and nursing are constantly evolving fields. Continuing education is essential for competence.</p>
                            
                            <h4>Burnout Prevention</h4>
                            <p>Self-care and resilience strategies are vital for a sustainable career in nursing.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Professionalism Final Quiz',
                        questions: [
                            { q: "Which role involves speaking up for the patient's rights?", options: ["Educator", "Manager", "Advocate", "Researcher"], correct: 2 },
                            { q: "What does the 'S' in SBAR stand for?", options: ["Subject", "Situation", "Safety", "Standard"], correct: 1 },
                            { q: "Which ethical value refers to truthfulness?", options: ["Veracity", "Justice", "Fidelity", "Autonomy"], correct: 0 },
                            { q: "Integrating research, expertise, and patient preference is known as:", options: ["Holistic Care", "Evidence-Based Practice", "Primary Nursing", "Case Management"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Professional Standards',
                        questions: [
                            { q: "Which ethical principle emphasizes the right to self-determination?", options: ["Justice", "Autonomy", "Beneficence", "Non-maleficence"], correct: 1 },
                            { q: "The nurse failing to give a scheduled medication fits which category of tort?", options: ["Assault", "Battery", "Negligence", "Defamation"], correct: 2 },
                            { q: "A patient's right to refuse treatment is protected by:", options: ["The Hippocratic Oath", "The Patient Self-Determination Act", "The Good Samaritan Law", "The Nurse Practice Act"], correct: 1 },
                            { q: "Which organization regulates nursing practice in the US?", options: ["State Boards of Nursing", "American Medical Association", "Joint Commission", "Department of Health"], correct: 0 },
                            { q: "Nurses are mandatory reporters for:", options: ["Traffic violations", "Child and Elder Abuse", "Tax evasion", "Marital disputes"], correct: 1 },
                            { q: "Which document defines the scope of nursing practice?", options: ["Code of Ethics", "Nurse Practice Act", "Hospital Policy", "Nursing Textbook"], correct: 1 },
                            { q: "Touching a patient without consent can be legally charged as:", options: ["Assault", "Battery", "Libel", "Slander"], correct: 1 },
                            { q: "The concept of 'Fidelity' in nursing ethics means:", options: ["Doing no harm", "Being fair", "Keeping promises", "Telling the truth"], correct: 2 },
                            { q: "Which is an example of an unintentional tort?", options: ["Malpractice", "False Imprisonment", "Assault", "Invasion of Privacy"], correct: 0 },
                            { q: "HIPAA primarily protects:", options: ["Insurance companies", "Patient privacy", "Hospital revenue", "Doctor's rights"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 10104,
                code: "NUR 104",
                title: "Sociology and Anthropology",
                icon: "ph-users-three",
                completed: false,
                description: "Study of human social behavior, culture, and their impact on health and healthcare delivery.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Sociology',
                        body: `
                            <h3>Understanding Society</h3>
                            <p>Sociology is the scientific study of society, including patterns of social relationships, social interaction, and culture.</p>
                            <p>For nurses, sociology helps in understanding the social forces that affect health, illness, and the healthcare system.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Culture and Health',
                        body: `
                            <h3>Culture vs. Society</h3>
                            <p><strong>Culture:</strong> The shared beliefs, values, and practices of a group.</p>
                            <p><strong>Society:</strong> The people who interact in such a way as to share a common culture.</p>
                            
                            <h4>Health Belief Systems</h4>
                            <p>Different cultures have varying explanations for illness (e.g., biomedical, magical-religious, holistic).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Social Determinants of Health',
                        body: `
                            <h3>Factors Influencing Health</h3>
                            <p>The conditions in which people are born, grow, live, work, and age drastically affect their health outcomes.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Social Determinants of Health</h4>
                                <img src="assets/social_determinants.png" alt="Social Determinants of Health Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Economic stability, education, social context, and healthcare access.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: The Family Unit',
                        body: `
                            <h3>Types of Families</h3>
                            <p>The family is the basic unit of society and a primary source of health support.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Family Structures</h4>
                                <img src="assets/family_structures.png" alt="Family Structures Illustration" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Nuclear, Extended, Single-Parent, and Blended families.</p>
                            </div>

                            <p>Nurses must assess family dynamics to provide holistic care.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Social Stratification',
                        body: `
                            <h3>Class and Status</h3>
                            <p>Social stratification refers to a society's categorization of its people into rankings based on factors like wealth, income, education, and power.</p>
                            <p><strong>Impact on Health:</strong> Lower socioeconomic status is consistently linked to poorer health outcomes and lower life expectancy.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Health Disparities',
                        body: `
                            <h3>Inequalities in Healthcare</h3>
                            <p>Health disparities are preventable differences in the burden of disease, injury, violence, or opportunities to achieve optimal health.</p>
                            <p>Populations can be defined by factors such as race or ethnicity, gender, education or income, disability, geographic location, or sexual orientation.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Medical Anthropology',
                        body: `
                            <h3>Cross-Cultural Healing</h3>
                            <p>Medical anthropology studies how culture and society represent and experiences of illness and healing.</p>
                            <ul>
                                <li><strong>Ethnomedicine:</strong> Comparative study of how different cultures view disease and how they treat or prevent it.</li>
                                <li><strong>Medical Pluralism:</strong> The employment of more than one medical system or the use of both conventional and complementary medicine.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Urbanization and Health',
                        body: `
                            <h3>City Living</h3>
                            <p>Urbanization brings opportunities but also health challenges such as overcrowding, pollution, and infectious disease spread.</p>
                            <p>Conversely, rural areas may face challenges with access to healthcare facilities and providers.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Gender and Health',
                        body: `
                            <h3>Gender Roles</h3>
                            <p>Gender affects health behaviors, exposure to risks, and access to healthcare.</p>
                            <p>Societal expectations of "masculinity" and "femininity" can influence how symptoms are reported and treated.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Social Change and Healthcare',
                        body: `
                            <h3>Evolving Systems</h3>
                            <p>Demographic shifts (e.g., aging population) and technological advancements drive changes in healthcare delivery.</p>
                            <p>The "Sick Role" (Parsons): Rights and obligations of those enjoying the status of being sick.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Sociology Final Quiz',
                        questions: [
                            { q: "Which of the following describes a family consisting of parents and their biological children?", options: ["Extended", "Nuclear", "Blended", "Communal"], correct: 1 },
                            { q: "The shared beliefs, values, and practices of a group are known as:", options: ["Society", "Race", "Culture", "Ethnicity"], correct: 2 },
                            { q: "Which factor is a key social determinant of health?", options: ["Genetics", "Blood type", "Education level", "Height"], correct: 2 },
                            { q: "Differences in health outcomes between populations are called:", options: ["Health equity", "Health disparities", "Morbidity rates", "Medical pluralism"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Sociological Concepts',
                        questions: [
                            { q: "Which term describes a society's categorization of people into rankings?", options: ["Socialization", "Stratification", "Mobility", "Structure"], correct: 1 },
                            { q: "The 'Sick Role' concept was developed by:", options: ["Karl Marx", "Talcott Parsons", "Max Weber", "Emile Durkheim"], correct: 1 },
                            { q: "Health disparities are most strongly linked to:", options: ["Genetic make-up", "Socioeconomic Status (SES)", "Climate", "Personal choice"], correct: 1 },
                            { q: "A family structure with parents, children, and grandparents is called:", options: ["Nuclear", "Extended", "Blended", "Single-parent"], correct: 1 },
                            { q: "The process of learning the culture of a society is:", options: ["Acculturation", "Assimilation", "Socialization", "Integration"], correct: 2 },
                            { q: "Which is a 'Social Determinant of Health'?", options: ["Blood Pressure", "Access to Education", "Genetic predisposition", "Age"], correct: 1 },
                            { q: "The belief that one's own culture is superior is called:", options: ["Relativism", "Ethnocentrism", "Pluralism", "Multiculturalism"], correct: 1 },
                            { q: "Medical Pluralism refers to:", options: ["Using multiple doctors", "Coexistence of different medical systems", "Having multiple insurance plans", "Treating multiple diseases"], correct: 1 },
                            { q: "Urbanization is generally associated with:", options: ["Decreased pollution", "Increased infectious disease transmission", "Lower stress levels", "Better air quality"], correct: 1 },
                            { q: "Culture is best defined as:", options: ["Biological traits", "Shared beliefs, values, and practices", "Economic status", "Political affiliation"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 10105,
                code: "NUR 105",
                title: "Psychology",
                icon: "ph-brain",
                completed: false,
                description: "Introduction to the scientific study of the mind and behavior, relevant to patient care and mental health.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Psychology',
                        body: `
                            <h3>The Science of Mind</h3>
                            <p>Psychology explains how we think, feel, and act. In nursing, it is crucial for communicating with patients and understanding their behavior during illness.</p>
                            <h4>Perspectives</h4>
                            <ul>
                                <li><strong>Biological:</strong> Brain and nervous system.</li>
                                <li><strong>Cognitive:</strong> Thinking and memory.</li>
                                <li><strong>Behavioral:</strong> Learned behaviors (Pavlov, Skinner).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Biopsychosocial Model',
                        body: `
                            <h3>Integrated Health</h3>
                            <p>Health and illness are determined by a dynamic interaction between biological, psychological, and social factors.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Biopsychosocial Model</h4>
                                <img src="assets/biopsychosocial.png" alt="Biopsychosocial Model Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: The intersection of biology, psychology, and social environment.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Personality Theories',
                        body: `
                            <h3>Psychoanalytic Theory (Freud)</h3>
                            <p>Freud believed personality is composed of three interacting systems.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Iceberg Model</h4>
                                <img src="assets/freud_iceberg.png" alt="Freud's Iceberg Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Id (Unconscious), Ego (Conscious/Preconscious), Superego (Moral).</p>
                            </div>

                            <ul>
                                <li><strong>Id:</strong> Pleasure principle (instincts).</li>
                                <li><strong>Ego:</strong> Reality principle.</li>
                                <li><strong>Superego:</strong> Morality principle.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Human Development',
                        body: `
                            <h3>Lifespan Development</h3>
                            <p>Understanding the stages of growth helps nurses provide age-appropriate care.</p>
                            
                            <h4>Erikson's Stages of Psychosocial Development</h4>
                            <ul>
                                <li><strong>Infancy:</strong> Trust vs. Mistrust.</li>
                                <li><strong>Adolescence:</strong> Identity vs. Role Confusion.</li>
                                <li><strong>Late Adulthood:</strong> Integrity vs. Despair.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Stress and Coping',
                        body: `
                            <h3>The Stress Response</h3>
                            <p>Stress is the body's reaction to any change that requires an adjustment or response. The "Fight or Flight" response activates the SNS.</p>
                            
                            <h3>Coping Mechanisms</h3>
                            <ul>
                                <li><strong>Problem-Focused:</strong> Tackling the stressor directly.</li>
                                <li><strong>Emotion-Focused:</strong> Managing the emotional distress.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Learning and Memory',
                        body: `
                            <h3>How We Learn</h3>
                            <p>Important for patient education.</p>
                            <ul>
                                <li><strong>Classical Conditioning:</strong> Learning by association.</li>
                                <li><strong>Operant Conditioning:</strong> Learning by consequences (rewards/punishments).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Motivation and Emotion',
                        body: `
                            <h3>Driving Forces</h3>
                            <p><strong>Motivation:</strong> Needs and desires that energize and direct behavior (e.g., Maslow's Hierarchy).</p>
                            <p><strong>Emotion:</strong> Complex psychological state that involves three distinct components: a subjective experience, a physiological response, and a behavioral or expressive response.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Psychological Disorders',
                        body: `
                            <h3>Common Mental Health Issues</h3>
                            <ul>
                                <li><strong>Anxiety Disorders:</strong> Excessive fear and anxiety.</li>
                                <li><strong>Mood Disorders:</strong> Depression, Bipolar disorder.</li>
                                <li><strong>Schizophrenia:</strong> Distortions in thinking, perception, and affect.</li>
                            </ul>
                            <p>Nurses play a key role in identifying symptoms and supporting treatment.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Consciousness and Sleep',
                        body: `
                            <h3>Importance of Sleep for Health</h3>
                            <p>Sleep is vital for physical and mental restoration. Circadian rhythms regulate the sleep-wake cycle.</p>
                            <p>Sleep deprivation impairs cognitive function and immune response.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Health Psychology',
                        body: `
                            <h3>Behavior Change</h3>
                            <p>Helping patients adopt healthier behaviors (e.g., quitting smoking, exercise).</p>
                            <p><strong>Transtheoretical Model:</strong> Precontemplation, Contemplation, Preparation, Action, Maintenance.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Psychology Final Quiz',
                        questions: [
                            { q: "Which part of personality operates on the 'pleasure principle'?", options: ["Ego", "Id", "Superego", "Conscious"], correct: 1 },
                            { q: "Who proposed the stages of Psychosocial Development?", options: ["Freud", "Erikson", "Piaget", "Skinner"], correct: 1 },
                            { q: "Learning through consequences (rewards/punishments) is known as:", options: ["Classical conditioning", "Operant conditioning", "Observational learning", "Cognitive mapping"], correct: 1 },
                            { q: "Which model views health as an interaction of biological, psychological, and social factors?", options: ["Biomedical Model", "Biopsychosocial Model", "Holistic Model", "Systems Theory"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Foundations of Psychology',
                        questions: [
                            { q: "What is the primary focus of the cognitive perspective in psychology?", options: ["Unconscious drives", "Observable behavior", "Thinking and memory processes", "Biological structures"], correct: 2 },
                            { q: "Who is known for the theory of Classical Conditioning?", options: ["B.F. Skinner", "Ivan Pavlov", "Sigmund Freud", "Carl Rogers"], correct: 1 },
                            { q: "The 'Id' operates on which principle?", options: ["Reality Principle", "Morality Principle", "Pleasure Principle", "Rationality Principle"], correct: 2 },
                            { q: "According to Erikson, the conflict during adolescence is:", options: ["Trust vs. Mistrust", "Intimacy vs. Isolation", "Identity vs. Role Confusion", "Integrity vs. Despair"], correct: 2 },
                            { q: "Which part of the brain is primarily responsible for balance and coordination?", options: ["Cerebrum", "Cerebellum", "Brainstem", "Thalamus"], correct: 1 },
                            { q: "An individual's belief in their ability to succeed is called:", options: ["Self-esteem", "Self-actualization", "Self-efficacy", "Locus of control"], correct: 2 },
                            { q: "Which sleep stage is associated with vivid dreaming?", options: ["NREM Stage 1", "NREM Stage 3", "REM", "NREM Stage 2"], correct: 2 },
                            { q: "The fear of open or crowded spaces is known as:", options: ["Claustrophobia", "Agoraphobia", "Acrophobia", "Social Anxiety"], correct: 1 },
                            { q: "Maslow's highest level of need is:", options: ["Safety needs", "Love and belonging", "Self-actualization", "Physiological needs"], correct: 2 },
                            { q: "Which neurotransmitter is most commonly associated with depression?", options: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 10106,
                code: "NUR 106",
                title: "Health Assessment",
                icon: "ph-stethoscope",
                completed: false,
                description: "Systematic data collection to determine a patient's health status and functional health patterns.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Health Assessment',
                        body: `
                            <h3>The Nursing Process Base</h3>
                            <p>Health assessment is the first step of the nursing process (Assessment, Diagnosis, Planning, Implementation, Evaluation).</p>
                            <ul>
                                <li><strong>Subjective Data:</strong> What the patient says (Symptoms).</li>
                                <li><strong>Objective Data:</strong> What the nurse observes (Signs).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Health History',
                        body: `
                            <h3>Interviewing Skills</h3>
                            <p>Collecting a complete health history requires effective communication.</p>
                            <p>Components include: Biographical data, Chief complaint, History of present illness (OLD CARTS), Past medical history, Family history, and Lifestyle.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Physical Assessment Techniques',
                        body: `
                            <h3>The Four Pillars</h3>
                            <p>There are four primary techniques used in physical assessment, usually performed in this order (except for the abdomen).</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Assessment Techniques</h4>
                                <img src="assets/assessment_techniques.png" alt="Physical Assessment Techniques Icons" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Inspection, Palpation, Percussion, and Auscultation.</p>
                            </div>

                            <ul>
                                <li><strong>Inspection:</strong> Visual examination.</li>
                                <li><strong>Palpation:</strong> Touch (light and deep).</li>
                                <li><strong>Percussion:</strong> Tapping to produce sound.</li>
                                <li><strong>Auscultation:</strong> Listening with a stethoscope.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: General Survey & Vital Signs',
                        body: `
                            <h3>First Impressions</h3>
                            <p>The general survey begins the moment you see the patient. Observe appearance, behavior, body structure, and mobility.</p>
                            <p><strong>Vital Signs:</strong> Temperature, Pulse, Respirations, Blood Pressure, and O2 Saturation.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Pain Assessment',
                        body: `
                            <h3>The 5th Vital Sign</h3>
                            <p>Pain is whatever the experiencing person says it is.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Pain Assessment Scale</h4>
                                <img src="assets/pain_scale.png" alt="Visual Pain Scale" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Numeric and Wong-Baker FACES Pain Rating Scale.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Skin, Hair, and Nails',
                        body: `
                            <h3>Integumentary System</h3>
                            <p>Assess for color (pallor, cyanosis, jaundice), moisture, temperature, texture, turgor, and lesions.</p>
                            <p><strong>ABCDE Rule for Melanoma:</strong> Asymmetry, Border, Color, Diameter, Evolving.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: HEENT',
                        body: `
                            <h3>Head, Eyes, Ears, Nose, Throat</h3>
                            <ul>
                                <li><strong>Head:</strong> Normocephalic? Lumps?</li>
                                <li><strong>Eyes:</strong> PERRLA (Pupils Equal, Round, Reactive to Light and Accommodation).</li>
                                <li><strong>Ears:</strong> Hearing acuity, tympanic membrane.</li>
                                <li><strong>Mouth:</strong> Mucosa pink and moist?</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Respiratory & Cardiovascular',
                        body: `
                            <h3>Thorax and Heart</h3>
                            <p><strong>Lungs:</strong> Auscultate anterior and posterior fields for bronchial, bronchovesicular, and vesicular sounds.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Heart Sounds</h4>
                                <img src="assets/stethoscope_placement.png" alt="Stethoscope Placement Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 8.1: Aortic, Pulmonic, Erb's Point, Tricuspid, and Mitral areas.</p>
                            </div>

                            <p>Remember "All People Eat Taco Meat" for placement locations.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Abdominal & Musculoskeletal',
                        body: `
                            <h3>Abdomen</h3>
                            <p>Order changes: Inspection -> Auscultation -> Percussion -> Palpation (to avoid altering bowel sounds).</p>
                            
                            <h3>Musculoskeletal</h3>
                            <p>Assess Range of Motion (ROM) and muscle strength (grade 0-5).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Neurological Assessment',
                        body: `
                            <h3>The Nervous System</h3>
                            <p><strong>Mental Status:</strong> Level of Consciousness (LOC) - Glasgow Coma Scale.</p>
                            <p><strong>Cranial Nerves:</strong> Testing functions of the 12 pairs.</p>
                            <p><strong>Reflexes:</strong> Deep tendon reflexes.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Health Assessment Final Quiz',
                        questions: [
                            { q: "What is the correct order of assessment for the abdomen?", options: ["Inspect, Palpate, Percuss, Auscultate", "Inspect, Auscultate, Percuss, Palpate", "Palpate, Inspect, Auscultate, Percuss", "Auscultate, Inspect, Palpate, Percuss"], correct: 1 },
                            { q: "What does PERRLA stand for?", options: ["Pupils Equal, Round, Reactive to Light and Accommodation", "Pupils Even, Red, Reactive to Light and Angle", "Pulse Equal, Regular, Rate, and Arrythmia", "Patient Eating, Resting, Responding, Listening, and Active"], correct: 0 },
                            { q: "Which technique involves tapping on the skin to hear sounds?", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], correct: 2 },
                            { q: "Pain is best described as:", options: ["What the nurse observes", "What the doctor diagnoses", "What the patient says it is", "Only physical symptoms"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Health Assessment',
                        questions: [
                            { q: "Which assessment technique involves listening to sounds produced by the body?", options: ["Inspection", "Palpation", "Percussion", "Auscultation"], correct: 3 },
                            { q: "When assessing the abdomen, which step comes second?", options: ["Palpation", "Auscultation", "Percussion", "Inspection"], correct: 1 },
                            { q: "A patient's skin is yellowish. This is documented as:", options: ["Cyanosis", "Erythema", "Jaundice", "Pallor"], correct: 2 },
                            { q: "Clubbing of the fingernails is associated with:", options: ["Chronic Hypoxia", "Iron Deficiency", "Fungal Infection", "Trauma"], correct: 0 },
                            { q: "The 'S' in the OLD CARTS mnemonic stands for:", options: ["Site", "Severity", "Setting", "Symptoms"], correct: 1 },
                            { q: "Which sound is expected when percussing the lungs?", options: ["Dullness", "Tympany", "Resonance", "Flatness"], correct: 2 },
                            { q: "Which cranial nerve is assessed by asking the patient to smile and frown?", options: ["CN V (Trigeminal)", "CN VII (Facial)", "CN III (Oculomotor)", "CN X (Vagus)"], correct: 1 },
                            { q: "A score of 15 on the Glasgow Coma Scale indicates:", options: ["Deep Coma", "Mild Impairment", "Fully Alert and Oriented", "Brain Death"], correct: 2 },
                            { q: "To assess for kidney tenderness, the nurse performs percussion at the:", options: ["Right Upper Quadrant", "Costovertebral Angle (CVA)", "Suprapubic Area", "Epigastric Area"], correct: 1 },
                            { q: "Normal capillary refill time is:", options: ["Less than 1 second", "Less than 3 seconds", "Greater than 3 seconds", "Greater than 5 seconds"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 10107,
                code: "NUR 107",
                title: "Medical Surgical Nursing I",
                icon: "ph-hospital",
                completed: false,
                description: "Focus on adult patients with alterations in respiratory, cardiovascular, vascular, and hematological function.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Respiratory Disorders: COPD & Asthma',
                        body: `
                            <h3>Chronic Obstructive Pulmonary Disease (COPD)</h3>
                            <p>A group of diseases that cause airflow blockage and breathing-related problems. Includes Emphysema and Chronic Bronchitis.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Pathophysiology: Emphysema</h4>
                                <img src="assets/copd_alveoli.png" alt="Normal vs Emphysema Alveoli" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Destruction of alveolar walls decreases surface area for gas exchange.</p>
                            </div>

                            <h3>Asthma</h3>
                            <p>Chronic inflammation of the airways. Key features: Bronchoconstriction, Edema, and Mucus production.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Infectious Respiratory Conditions',
                        body: `
                            <h3>Pneumonia</h3>
                            <p>Inflammation of the lung parenchyma caused by various microorganisms (bacteria, mycobacteria, fungi, and viruses).</p>
                            <ul>
                                <li><strong>CAP:</strong> Community-Acquired Pneumonia.</li>
                                <li><strong>HAP:</strong> Hospital-Acquired Pneumonia.</li>
                            </ul>

                            <h3>Tuberculosis (TB)</h3>
                            <p>Infectious disease primarily affecting lung parenchyma. Requires airborne precautions (N95 mask).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Hypertension (HTN)',
                        body: `
                            <h3>The Silent Killer</h3>
                            <p>Defined as systolic BP > 130 mmHg or diastolic > 80 mmHg.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Hypertension Complications</h4>
                                <img src="assets/htn_complications.png" alt="HTN Complications Infographic" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: End-organ damage (Brain, Heart, Kidneys, Eyes).</p>
                            </div>

                            <h4>Consequences of Uncontrolled HTN</h4>
                            <ul>
                                <li><strong>Brain:</strong> Stroke / TIA.</li>
                                <li><strong>Eyes:</strong> Retinopathy.</li>
                                <li><strong>Heart:</strong> LV Hypertrophy, Heart Failure.</li>
                                <li><strong>Kidneys:</strong> Renal Failure.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Heart Failure (CHF)',
                        body: `
                            <h3>Inability to Pump</h3>
                            <p>Heart cannot pump sufficient blood to meet the needs of the tissues.</p>
                            
                            <h4>Left-Sided Failure (Lungs)</h4>
                            <p>Symptoms: Dyspnea, Cough, Crackles, Orthopnea (Fluid backs up into lungs).</p>

                            <h4>Right-Sided Failure (Body)</h4>
                            <p>Symptoms: JVD, Peripheral Edema, Ascites, Hepatomegaly (Fluid backs up into venous system).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Coronary Artery Disease (CAD)',
                        body: `
                            <h3>Atherosclerosis</h3>
                            <p>Accumulation of lipid-containing plaque in the arteries.</p>
                            <h4>Angina Pectoris</h4>
                            <ul>
                                <li><strong>Stable Angina:</strong> Predictable, relieved by rest/nitro.</li>
                                <li><strong>Unstable Angina:</strong> Unpredictable, increases in frequency/severity. Precursor to MI.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Vascular Diseases',
                        body: `
                            <h3>Vascular Disorders</h3>
                            <ul>
                                <li><strong>PAD (Arterial):</strong> "Pain with delivery" (Claudication). Pale, cool, pulseless extremities.</li>
                                <li><strong>PVD (Venous):</strong> "Pooling with venous". Edema, brown discoloration, ulcers.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Deep Vein Thrombosis (DVT)',
                        body: `
                            <h3>Venous Thromboembolism</h3>
                            <p>Formation of a thrombus in a deep vein, usually the leg.</p>
                            <p><strong>Virchow's Triad:</strong></p>
                            <ol>
                                <li>Venous Stasis.</li>
                                <li>Endothelial Damage.</li>
                                <li>Hypercoagulability.</li>
                            </ol>
                            <p><strong>Danger:</strong> Pulmonary Embolism (PE).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Anemias',
                        body: `
                            <h3>Hematological Disorders</h3>
                            <p>Reduction in the number of RBCs, quantity of hemoglobin, or volume of packed red cells (hematocrit).</p>
                            <ul>
                                <li><strong>Iron Deficiency:</strong> Most common. Microcytic.</li>
                                <li><strong>Pernicious Anemia:</strong> Lack of Intrinsic Factor (B12 malabsorption). Macrocytic.</li>
                                <li><strong>Sickle Cell:</strong> Genetic hemolytic anemia.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Coagulation Disorders',
                        body: `
                            <h3>Bleeding Issues</h3>
                            <ul>
                                <li><strong>Thrombocytopenia:</strong> Low platelet count (< 150,000). Risk for bleeding.</li>
                                <li><strong>Hemophilia:</strong> Genetic deficiency of clotting factors (Factor VIII or IX).</li>
                                <li><strong>DIC:</strong> Life-threatening coagulopathy (clotting and bleeding simultaneously).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Fluid & Electrolyte Imbalances',
                        body: `
                            <h3>Maintaining Homeostasis</h3>
                            <p><strong>Sodium (Na+):</strong> Hyponatremia vs Hypernatremia (Neuro changes).</p>
                            <p><strong>Potassium (K+):</strong> Hypokalemia vs Hyperkalemia (Cardiac dysrhythmias!).</p>
                            <p><strong>Calcium (Ca++):</strong> Hypocalcemia (Tentany, Chvostek's sign).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Med Surg I Final Quiz',
                        questions: [
                            { q: "A patient with Left-Sided Heart Failure is most likely to present with:", options: ["Jugular Vein Distension", "Peripheral Edema", "Crackles in lungs", "Hepatomegaly"], correct: 2 },
                            { q: "Which finding is consistent with Arterial insufficiency (PAD)?", options: ["Warm, edematous legs", "Brown pigmentation around ankles", "Pale, cool legs with decreased pulses", "Pain relieved by walking"], correct: 2 },
                            { q: "A patient with COPD has a barrel chest. This is due to:", options: ["Air trapping and hyperinflation", "Fluid in the pleural space", "Construction of the chest wall", "Collapsing of alveoli"], correct: 0 },
                            { q: "Which electrolyte imbalance poses the greatest risk for cardiac dysrhythmias?", options: ["Hyponatremia", "Hyperkalemia", "Hypochloremia", "Hyperglycemia"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Med Surg I Review',
                        questions: [
                            { q: "Which breathing technique is most beneficial for a patient with COPD?", options: ["Rapid shallow breathing", "Pursed-lip breathing", "Holding breath", "Inhale through mouth"], correct: 1 },
                            { q: "A patient with TB requires which type of isolation precautions?", options: ["Contact", "Droplet", "Airborne", "Standard"], correct: 2 },
                            { q: "The most common cause of Right-Sided Heart Failure is:", options: ["Hypertension", "Left-Sided Heart Failure", "Valve Disease", "Anemia"], correct: 1 },
                            { q: "Which lab value is most specific for myocardial damage (Heart Attack)?", options: ["CK-MB", "Myoglobin", "Troponin", "BNP"], correct: 2 },
                            { q: "Intermittent claudication is a hallmark sign of:", options: ["Deep Vein Thrombosis", "Peripheral Arterial Disease", "Venous Insufficiency", "Lymphedema"], correct: 1 },
                            { q: "Which medication class is used to treat Anaphylaxis?", options: ["Antihistamines", "Antibiotics", "Epinephrine", "Antivirals"], correct: 2 },
                            { q: "Hyperglycemia, ketosis, and acidosis are signs of:", options: ["Hypoglycemia", "DKA (Diabetic Ketoacidosis)", "HHNS", "Diabetes Insipidus"], correct: 1 },
                            { q: "Chvostek's sign involves twitching of the:", options: ["Arm", "Leg", "Facial muscles", "Hand"], correct: 2 },
                            { q: "Which blood type is the 'Universal Donor'?", options: ["Type AB Positive", "Type O Negative", "Type A Negative", "Type O Positive"], correct: 1 },
                            { q: "A common side effect of ACE inhibitors is:", options: ["Dry cough", "Bradycardia", "Hypokalemia", "Tachycardia"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 10108,
                code: "NUR 108",
                title: "Human Anatomy II",
                icon: "ph-person",
                completed: false,
                description: "Advanced anatomical structures including appendicular skeleton, joints, nervous, and endocrine systems.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Appendicular Skeleton: Upper Limb',
                        body: `
                            <h3>The Shoulder & Arm</h3>
                            <p><strong>Pectoral Girdle:</strong> Clavicle and Scapula.</p>
                            <p><strong>Arm (Brachium):</strong> Humerus.</p>
                            <p><strong>Forearm (Antebrachium):</strong> Radius (lateral) and Ulna (medial).</p>
                            <p><strong>Hand:</strong> Carpals (8), Metacarpals (5), Phalanges (14).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Appendicular Skeleton Overview</h4>
                                <img src="assets/appendicular_skeleton.png" alt="Appendicular Skeleton Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Highlighted Appendicular Skeleton (Limbs & Girdles).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Appendicular Skeleton: Lower Limb',
                        body: `
                            <h3>The Hip & Leg</h3>
                            <p><strong>Pelvic Girdle:</strong> Ilium, Ischium, Pubis (Os Coxae).</p>
                            <p><strong>Thigh:</strong> Femur (longest bone).</p>
                            <p><strong>Leg (Crus):</strong> Tibia (weight-bearing) and Fibula.</p>
                            <p><strong>Foot:</strong> Tarsals, Metatarsals, Phalanges. Calcaneus is the heel.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Joints & Articulations',
                        body: `
                            <h3>Classifications</h3>
                            <p><strong>Structural:</strong> Fibrous, Cartilaginous, Synovial.</p>
                            <p><strong>Functional:</strong> Synarthrosis (immovable), Amphiarthrosis (slightly movable), Diarthrosis (freely movable).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Synovial Joint Structure</h4>
                                <img src="assets/synovial_joint.png" alt="Synovial Joint Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Structure of a Synovial Joint (e.g., Knee).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Muscle Tissue & Physiology',
                        body: `
                            <h3>Muscle Types</h3>
                            <p><strong>Skeletal:</strong> Striated, Voluntary, Multinucleated.</p>
                            <p><strong>Cardiac:</strong> Striated, Involuntary, Intercalated Discs.</p>
                            <p><strong>Smooth:</strong> Non-striated, Involuntary (Visceral).</p>
                            <p><strong>Sarcomere:</strong> The contractile unit of muscle (Actin & Myosin sliding filaments).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Nervous System: CNS',
                        body: `
                            <h3>Central Nervous System</h3>
                            <p>Consists of the Brain and Spinal Cord. Protected by Meninges (Dura, Arachnoid, Pia).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Human Brain</h4>
                                <img src="assets/brain_lobes.png" alt="Brain Lobes Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Functional Lobes of the Cerebrum.</p>
                            </div>
                            
                            <ul>
                                <li><strong>Frontal:</strong> Motor, personality, speech (Broca's).</li>
                                <li><strong>Parietal:</strong> Sensory processing.</li>
                                <li><strong>Temporal:</strong> Hearing, memory, language (Wernicke's).</li>
                                <li><strong>Occipital:</strong> Vision.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Nervous System: PNS',
                        body: `
                            <h3>Peripheral Nervous System</h3>
                            <p><strong>Somatic:</strong> Voluntary control.</p>
                            <p><strong>Autonomic (ANS):</strong> Involuntary.</p>
                            <ul>
                                <li><strong>Sympathetic:</strong> "Fight or Flight".</li>
                                <li><strong>Parasympathetic:</strong> "Rest and Digest".</li>
                            </ul>
                            <p><strong>Cranial Nerves:</strong> 12 Pairs (Olfactory to Hypoglossal).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Special Senses: Eye & Ear',
                        body: `
                            <h3>The Eye</h3>
                            <p><strong>Layers:</strong> Sclera/Cornea (Outer), Choroid/Ciliary/Iris (Middle), Retina (Inner - Rods & Cones).</p>
                            
                            <h3>The Ear</h3>
                            <p><strong>Outer:</strong> Pinna, Canal, Tympanic Membrane.</p>
                            <p><strong>Middle:</strong> Ossicles (Malleus, Incus, Stapes).</p>
                            <p><strong>Inner:</strong> Cochlea (Hearing), Vestibule/Semicircular Canals (Balance).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: The Endocrine System',
                        body: `
                            <h3>Hormonal Control</h3>
                            <p><strong>Pituitary (Master Gland):</strong> GH, TSH, ACTH, FSH, LH, Prolactin.</p>
                            <p><strong>Thyroid:</strong> T3/T4 (Metabolism), Calcitonin.</p>
                            <p><strong>Adrenals:</strong> Cortisol, Aldosterone, Epinephrine/Norepinephrine.</p>
                            <p><strong>Pancreas:</strong> Insulin (Beta cells), Glucagon (Alpha cells).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Reproductive Systems',
                        body: `
                            <h3>Male</h3>
                            <p>Testes (Sperm/Testosterone), Epididymis, Vas Deferens, Prostate, Urethra.</p>
                            
                            <h3>Female</h3>
                            <p>Ovaries (Eggs/Estrogen/Progesterone), Fallopian Tubes (Fertilization site), Uterus, Vagina.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Review of Systems',
                        body: `
                            <h3>Integration</h3>
                            <p>The body systems do not work in isolation. The Nervous and Endocrine systems regulate all others to maintain homeostasis.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Anatomy II Final Quiz',
                        questions: [
                            { q: "Which bone is found in the upper arm?", options: ["Femur", "Humerus", "Tibia", "Radius"], correct: 1 },
                            { q: "Which lobe of the brain is primarily responsible for vision?", options: ["Frontal", "Parietal", "Temporal", "Occipital"], correct: 3 },
                            { q: "What type of joint is the knee?", options: ["Fibrous", "Synovial", "Cartilaginous", "Suture"], correct: 1 },
                            { q: "Which part of the ear contains the ossicles?", options: ["Outer Ear", "Middle Ear", "Inner Ear", "Cochlea"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Anatomy II Review',
                        questions: [
                            { q: "Which bone is the longest and strongest in the human body?", options: ["Humerus", "Tibia", "Femur", "Fibula"], correct: 2 },
                            { q: "The 'Funny Bone' is actually which nerve causing sensation?", options: ["Radial", "Median", "Ulnar", "Sciatic"], correct: 2 },
                            { q: "Which part of the brain controls balance and coordination?", options: ["Brainstem", "Cerebrum", "Cerebellum", "Thalamus"], correct: 2 },
                            { q: "Sutures between skull bones are classified as which type of joint?", options: ["Diarthrosis", "Amphiarthrosis", "Synarthrosis", "Synovial"], correct: 2 },
                            { q: "The 'Master Gland' of the endocrine system is the:", options: ["Thyroid", "Adrenal", "Pituitary", "Pancreas"], correct: 2 },
                            { q: "Photoreceptors (Rods and Cones) are located in the:", options: ["Sclera", "Cornea", "Retina", "Lens"], correct: 2 },
                            { q: "Which division of the ANS causes pupil dilation and increased heart rate?", options: ["Parasympathetic", "Sympathetic", "Somatic", "Enteric"], correct: 1 },
                            { q: "Carpal bones are found in the:", options: ["Ankle", "Wrist", "Forearm", "Foot"], correct: 1 },
                            { q: "Which muscle type has intercalated discs?", options: ["Skeletal", "Smooth", "Cardiac", "Visceral"], correct: 2 },
                            { q: "The largest nerve in the body is the:", options: ["Femoral", "Sciatic", "Vagus", "Phrenic"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 10109, code: "NUR 109", title: "Human Physiology II", icon: "ph-heart-beat", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Neurophysiology: The Neuron',
                        body: `
                            <h3>Electrical Signaling</h3>
                            <p><strong>Resting Potential:</strong> -70mV. Maintained by Na+/K+ Pump.</p>
                            <p><strong>Graded Potentials:</strong> Local changes in membrane potential (EPSP/IPSP).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Action Potential</h4>
                                <img src="assets/action_potential.png" alt="Action Potential Graph" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Phases of Depolarization and Repolarization.</p>
                            </div>
                            
                            <ul>
                                <li><strong>Depolarization:</strong> Na+ influx.</li>
                                <li><strong>Repolarization:</strong> K+ efflux.</li>
                                <li><strong>Hyperpolarization:</strong> Excess K+ efflux.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Synaptic Transmission',
                        body: `
                            <h3>Chemical Synapses</h3>
                            <p>Communication between neurons occurs at the synapse via neurotransmitters.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Neurotransmitter Release</h4>
                                <img src="assets/synapse_diagram.png" alt="Synapse Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Vesicle fusion and receptor binding.</p>
                            </div>

                            <ol>
                                <li>Action potential reaches terminal.</li>
                                <li>Ca++ channels open, Ca++ enters.</li>
                                <li>Vesicles release NT via exocytosis.</li>
                                <li>NT binds to postsynaptic receptors.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Neurotransmitters',
                        body: `
                            <h3>Key Messengers</h3>
                            <ul>
                                <li><strong>Acetylcholine (ACh):</strong> Muscle contraction, memory.</li>
                                <li><strong>Dopamine:</strong> Reward, movement (Parkinson's link).</li>
                                <li><strong>Serotonin:</strong> Mood, sleep.</li>
                                <li><strong>GABA:</strong> Main inhibitory NT.</li>
                                <li><strong>Glutamate:</strong> Main excitatory NT.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Endocrine Physiology',
                        body: `
                            <h3>Hormone Action</h3>
                            <p><strong>Steroid Hormones:</strong> Lipid soluble, enter cell, bind DNA (e.g., Cortisol, Testosterone).</p>
                            <p><strong>Peptide Hormones:</strong> Water soluble, bind surface receptors, use Second Messengers (cAMP) (e.g., Insulin).</p>
                            <p><strong>Negative Feedback:</strong> The product inhibits the stimulus (e.g., High T3 inhibits TSH).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Hypothalamus & Pituitary',
                        body: `
                            <h3>The Control Center</h3>
                            <p><strong>Posterior Pituitary:</strong> Stores ADH and Oxytocin (made in Hypothalamus).</p>
                            <p><strong>Anterior Pituitary:</strong> Produces GH, TSH, ACTH, FSH, LH, Prolactin.</p>
                            <p><strong>Gigantism/Acromegaly:</strong> Excess Growth Hormone.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Thyroid & Adrenal Glands',
                        body: `
                            <h3>Metabolism & Stress</h3>
                            <p><strong>Thyroid:</strong> BMR Regulation. Iodine is essential.</p>
                            <p><strong>Adrenal Cortex:</strong> Glucocorticoids (Cortisol - sugar), Mineralocorticoids (Aldosterone - salt), Androgens (sex).</p>
                            <p><strong>Adrenal Medulla:</strong> Catecholamines (Epinephrine - Fight/Flight).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Pancreas & Glucose Regulation',
                        body: `
                            <h3>Blood Sugar Control</h3>
                            <p><strong>Insulin (Beta Cells):</strong> Lowers blood glucose (glycogenesis).</p>
                            <p><strong>Glucagon (Alpha Cells):</strong> Raises blood glucose (glycogenolysis, gluconeogenesis).</p>
                            <p><strong>Diabetes Mellitus:</strong> Type 1 (No insulin), Type 2 (Insulin resistance).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Physiology of Vision',
                        body: `
                            <h3>Phototransduction</h3>
                            <p>Conversion of light energy into electrical signals by Rods (dim light) and Cones (color).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Visual Pathway</h4>
                                <img src="assets/vision_pathway.png" alt="Vision Pathway Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 8.1: From Retina to Visual Cortex.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Hearing & Equilibrium',
                        body: `
                            <h3>Auditory Transduction</h3>
                            <p>Sound waves -> Tympanic Membrane -> Ossicles -> Oval Window -> Cochlear Fluid -> Hair Cells bend -> Action Potential.</p>
                            <h3>Equilibrium</h3>
                            <p><strong>Vestibule:</strong> Static equilibrium (Gravity).</p>
                            <p><strong>Semicircular Canals:</strong> Dynamic equilibrium (Rotation).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Reproductive Physiology',
                        body: `
                            <h3>Cycles</h3>
                            <p><strong>Ovarian Cycle:</strong> Follicular Phase -> Ovulation (LH Surge) -> Luteal Phase.</p>
                            <p><strong>Uterine Cycle:</strong> Menses -> Proliferative -> Secretory.</p>
                            <p><strong>Spermatogenesis:</strong> Continuous production in seminiferous tubules.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Physiology II Final Quiz',
                        questions: [
                            { q: "Which ion influx is responsible for the depolarization phase of an action potential?", options: ["Potassium (K+)", "Sodium (Na+)", "Calcium (Ca++)", "Chloride (Cl-)"], correct: 1 },
                            { q: "Which hormone lowers blood glucose levels?", options: ["Glucagon", "Cortisol", "Insulin", "Epinephrine"], correct: 2 },
                            { q: "Where are the receptors for hearing located?", options: ["Tympanic Membrane", "Semicircular Canals", "Cochlea", "Vestibule"], correct: 2 },
                            { q: "What triggers ovulation?", options: ["FSH spike", "LH surge", "Progesterone drop", "Estrogen drop"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Advanced Physiology',
                        questions: [
                            { q: "The resting membrane potential is primarily maintained by the:", options: ["Sodium-Potassium Pump", "Calcium Pump", "Chloride Channels", "Proton Pump"], correct: 0 },
                            { q: "Saltatory conduction occurs in:", options: ["Unmyelinated axons", "Myelinated axons", "Dendrites", "Cell bodies"], correct: 1 },
                            { q: "Which brain lobe contains the primary motor cortex?", options: ["Parietal", "Frontal", "Temporal", "Occipital"], correct: 1 },
                            { q: "The 'Fight or Flight' response is mediated by the:", options: ["Parasympathetic Nervous System", "Sympathetic Nervous System", "Somatic Nervous System", "Enteric Nervous System"], correct: 1 },
                            { q: "Which hormone regulates calcium levels in the blood?", options: ["Insulin", "Parathyroid Hormone (PTH)", "Thyroxine", "Aldosterone"], correct: 1 },
                            { q: "Sound waves are converted to neural signals in the:", options: ["Tympanic Membrane", "Ossicles", "Cochlea", "Semicircular Canals"], correct: 2 },
                            { q: "Spermatogenesis occurs in the:", options: ["Epididymis", "Seminiferous Tubules", "Vas Deferens", "Prostate"], correct: 1 },
                            { q: "The proliferative phase of the uterine cycle corresponds to which ovarian phase?", options: ["Luteal", "Follicular", "Ovulation", "Menstrual"], correct: 1 },
                            { q: "Enzymes increase reaction rates by:", options: ["Increasing temperature", "Lowering activation energy", "Changing pH", "Adding ATP"], correct: 1 },
                            { q: "Glycolysis occurs in the:", options: ["Mitochondria", "Nucleus", "Cytoplasm", "Ribosome"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 10112, code: "NUR 112", title: "Medical Biochemistry", icon: "ph-flask", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Enzymes & Catalysis',
                        body: `
                            <h3>Biological Catalysts</h3>
                            <p>Enzymes lower the activation energy of reactions. They are highly specific.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Mechanism of Action</h4>
                                <img src="assets/enzyme_mechanism.png" alt="Enzyme Mechanism Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Lock and Key Model vs Induced Fit.</p>
                            </div>
                            
                            <p><strong>Factors affecting rate:</strong> Temperature, pH, Substrate concentration.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Carbohydrate Metabolism',
                        body: `
                            <h3>Energy Production</h3>
                            <p>Glucose is the primary fuel source for the brain and RBCs.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cellular Respiration Overview</h4>
                                <img src="assets/metabolism_overview.png" alt="Metabolism Chart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: From Glycolysis to ATP.</p>
                            </div>

                            <ul>
                                <li><strong>Glycolysis:</strong> Anaerobic. Yields 2 ATP + Pyruvate.</li>
                                <li><strong>Krebs Cycle:</strong> Aerobic. Yields NADH/FADH2.</li>
                                <li><strong>ETC:</strong> Oxidative phosphorylation. Yields ~30-32 ATP.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Lipids & Membranes',
                        body: `
                            <h3>Fats in the Body</h3>
                            <p><strong>Triglycerides:</strong> Energy storage.</p>
                            <p><strong>Phospholipids:</strong> Cell membrane structure (bilayer).</p>
                            <p><strong>Cholesterol:</strong> Steroid hormone precursor and membrane fluidity.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Amino Acids & Proteins',
                        body: `
                            <h3>Building Blocks</h3>
                            <p><strong>Primary Structure:</strong> Amino acid sequence (Peptide bonds).</p>
                            <p><strong>Secondary:</strong> Alpha helix / Beta sheet (Hydrogen bonds).</p>
                            <p><strong>Tertiary:</strong> 3D folding (Disulfide bridges, Hydrophobic interactions).</p>
                            <p><strong>Quaternary:</strong> Multiple subunits (e.g., Hemoglobin).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: DNA Replication',
                        body: `
                            <h3>Genetic Information</h3>
                            <p>DNA Polymerase synthesizes new strands 5' to 3'.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Structure of DNA</h4>
                                <img src="assets/dna_structure.png" alt="DNA Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Double Helix and Base Pairing.</p>
                            </div>
                            
                            <p><strong>Base Pairing:</strong> Adenine (A) = Thymine (T), Cytosine (C) = Guanine (G).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Transcription & Translation',
                        body: `
                            <h3>Central Dogma</h3>
                            <p><strong>DNA -> RNA -> Protein</strong></p>
                            <ul>
                                <li><strong>Transcription:</strong> DNA to mRNA (Nucleus).</li>
                                <li><strong>Translation:</strong> mRNA to Polypeptide (Ribosome).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Vitamins & Minerals',
                        body: `
                            <h3>Micronutrients</h3>
                            <p><strong>Fat Soluble:</strong> A, D, E, K.</p>
                            <p><strong>Water Soluble:</strong> B Complex, C.</p>
                            <p><strong>Trace Minerals:</strong> Iron (Heme), Zinc (Enzymes), Iodine (Thyroid).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Acid-Base Balance',
                        body: `
                            <h3>pH Regulation</h3>
                            <p>Normal Blood pH: 7.35 - 7.45.</p>
                            <p><strong>Buffers:</strong> Bicarbonate system is the most important extracellular buffer.</p>
                            <p><strong>Respiratory:</strong> Controls CO2.</p>
                            <p><strong>Renal:</strong> Controls HCO3- and H+ excretion.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Clinical Markers',
                        body: `
                            <h3>Labs</h3>
                            <p><strong>Liver Enzymes:</strong> ALT, AST (damage).</p>
                            <p><strong>Cardiac Markers:</strong> Troponin (MI).</p>
                            <p><strong>Diabetes:</strong> HbA1c (Long-term glucose control).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Biochemistry of Cancer',
                        body: `
                            <h3>Uncontrolled Growth</h3>
                            <p><strong>Oncogenes:</strong> Promote cell division.</p>
                            <p><strong>Tumor Suppressors:</strong> Stop cell division (e.g., p53).</p>
                            <p><strong>Warburg Effect:</strong> Cancer cells prefer Glycolysis even in oxygen (Aerobic Glycolysis).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Biochemistry Final Quiz',
                        questions: [
                            { q: "Where does the Krebs Cycle take place?", options: ["Cytoplasm", "Mitochondrial Matrix", "Ribosome", "Nucleus"], correct: 1 },
                            { q: "Which vitamin is fat-soluble?", options: ["Vitamin C", "Vitamin B12", "Vitamin D", "Folate"], correct: 2 },
                            { q: "The process of converting DNA to mRNA is called:", options: ["Replication", "Transcription", "Translation", "Mutation"], correct: 1 },
                            { q: "Which bond stabilizes the secondary structure of proteins?", options: ["Peptide", "Hydrogen", "Disulfide", "Ionic"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Biochemistry Review',
                        questions: [
                            { q: "Which molecule is the primary energy currency of the cell?", options: ["Glucose", "ATP", "NADH", "Pyruvate"], correct: 1 },
                            { q: "Beta-oxidation is the process of breaking down:", options: ["Carbohydrates", "Proteins", "Fatty Acids", "Nucleic Acids"], correct: 2 },
                            { q: "Which of the following is an essential amino acid?", options: ["Alanine", "Serine", "Leucine", "Glutamate"], correct: 2 },
                            { q: "DNA replication is considered:", options: ["Conservative", "Semi-conservative", "Dispersive", "Non-conservative"], correct: 1 },
                            { q: "Which RNA molecule carries the genetic code from the nucleus to the ribosome?", options: ["tRNA", "rRNA", "mRNA", "snRNA"], correct: 2 },
                            { q: "Deficiency of Vitamin C causes:", options: ["Rickets", "Scurvy", "Beriberi", "Night blindness"], correct: 1 },
                            { q: "A solution with a pH of 2 is:", options: ["Neutral", "Basic", "Acidic", "Buffered"], correct: 2 },
                            { q: "Which enzyme is responsible for unwinding the DNA double helix?", options: ["Polymerase", "Ligase", "Helicase", "Primase"], correct: 2 },
                            { q: "Warburg effect describes cancer cells' preference for:", options: ["Aerobic Respiration", "Anaerobic Glycolysis", "Fatty Acid Oxidation", "Protein Catabolism"], correct: 1 },
                            { q: "Enzymes that add a phosphate group to a molecule are called:", options: ["Phosphatases", "Kinases", "Isomerases", "Ligases"], correct: 1 }
                        ]
                    }
                ]
            }
        ],
        year2: [
            {
                id: 20200, code: "NUR 200", title: "Immunology", icon: "ph-shield-check", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Overview of the Immune System',
                        body: `
                            <h3>The Body's Defense</h3>
                            <p>The immune system protects against disease. It identifies "self" vs "non-self".</p>
                            <p><strong>Two Main Arms:</strong></p>
                            <ul>
                                <li><strong>Innate Immunity:</strong> Non-specific, immediate response (Skin, Mucous membranes, Phagocytes).</li>
                                <li><strong>Adaptive Immunity:</strong> Specific, delayed response (B Cells, T Cells).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Cells of the Immune System',
                        body: `
                            <h3>White Blood Cells (Leukocytes)</h3>
                            <ul>
                                <li><strong>Neutrophils:</strong> First responders, bacterial killers.</li>
                                <li><strong>Macrophages:</strong> Big eaters (Phagocytosis), Antigen Presenting Cells (APCs).</li>
                                <li><strong>Eosinophils:</strong> Parasites and allergies.</li>
                                <li><strong>Basophils/Mast Cells:</strong> Histamine release (Inflammation).</li>
                                <li><strong>Lymphocytes:</strong> T Cells and B Cells.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Phagocytosis & Inflammation',
                        body: `
                            <h3>Eating Pathogens</h3>
                            <p>Phagocytes (Neutrophils, Macrophages) engulf and destroy invaders.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Process of Phagocytosis</h4>
                                <img src="assets/phagocytosis_process.png" alt="Phagocytosis Steps" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Engulfment and Digestion.</p>
                            </div>
                            
                            <p><strong>Inflammation Signs:</strong> Redness (Rubor), Heat (Calor), Swelling (Tumor), Pain (Dolor).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Adaptive Immunity',
                        body: `
                            <h3>Specific Defense</h3>
                            <p>Learns and remembers pathogens.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Humoral vs Cell-Mediated</h4>
                                <img src="assets/adaptive_immunity.png" alt="Adaptive Immunity Flowchart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: B-Cell and T-Cell Pathways.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Antibodies (Immunoglobulins)',
                        body: `
                            <h3>Humoral Immunity</h3>
                            <p>Produced by Plasma Cells (B Cells).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Antibody Structure</h4>
                                <img src="assets/antibody_structure.png" alt="Antibody Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Antigen Binding Sites and Chains.</p>
                            </div>

                            <ul>
                                <li><strong>IgG:</strong> Most abundant, crosses placenta.</li>
                                <li><strong>IgA:</strong> Secretions (Breast milk, tears).</li>
                                <li><strong>IgM:</strong> First responder (Pentamer).</li>
                                <li><strong>IgE:</strong> Allergies and Parasites.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: T Cells & Cell-Mediated Immunity',
                        body: `
                            <h3>T Lymphocytes</h3>
                            <p>Mature in the Thymus. Do not produce antibodies.</p>
                            <ul>
                                <li><strong>Helper T Cells (CD4):</strong> "Generals" of the immune system. Activate B cells and Cytotoxic T cells. Target of HIV.</li>
                                <li><strong>Cytotoxic T Cells (CD8):</strong> "Soldiers". Kill infected self-cells (Viruses, Cancer).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Vaccines & Immunity Types',
                        body: `
                            <h3>Acquiring Immunity</h3>
                            <ul>
                                <li><strong>Active Natural:</strong> Infection (Get sick, recover).</li>
                                <li><strong>Active Artificial:</strong> Vaccination (Antigen exposure).</li>
                                <li><strong>Passive Natural:</strong> Mother to Baby (IgG placenta, IgA milk).</li>
                                <li><strong>Passive Artificial:</strong> Immunoglobulins injection (Antivenom, Rabies Ig).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Hypersensitivity Reactions',
                        body: `
                            <h3>ACID Mnemonic</h3>
                            <ul>
                                <li><strong>Type I (A):</strong> Anaphylaxis/Allergy (IgE mediated). Rapid.</li>
                                <li><strong>Type II (C):</strong> Cytotoxic (Transfusion reaction). IgG/IgM attacking cells.</li>
                                <li><strong>Type III (I):</strong> Immune Complex (SLE, Rheumatoid Arthritis). Clumps deposit in tissues.</li>
                                <li><strong>Type IV (D):</strong> Delayed (TB test, Poison Ivy, Transplant rejection). T-Cell mediated.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Autoimmune Disorders',
                        body: `
                            <h3>Attack on Self</h3>
                            <p>Failure of tolerance. The immune system attacks healthy tissues.</p>
                            <ul>
                                <li><strong>SLE (Lupus):</strong> Systemic, Butterfly rash.</li>
                                <li><strong>RA:</strong> Joint lining attack.</li>
                                <li><strong>Type 1 Diabetes:</strong> Beta cell destruction.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: HIV/AIDS',
                        body: `
                            <h3>Immunodeficiency</h3>
                            <p>Retrovirus attacking CD4+ T-Helper cells.</p>
                            <p><strong>AIDS Diagnosis:</strong> CD4 Count < 200 or an AIDS-defining illness (PCP Pneumonia, Kaposi's Sarcoma).</p>
                            <p><strong>Treatment:</strong> HAART/ART (Antiretrovirals).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Immunology Final Quiz',
                        questions: [
                            { q: "Which immunoglobulin crosses the placenta to provide passive immunity to the fetus?", options: ["IgM", "IgA", "IgG", "IgE"], correct: 2 },
                            { q: "What is the primary function of CD8+ Cytotoxic T Cells?", options: ["Produce antibodies", "Kill infected host cells", "Activate B cells", "Release Histamine"], correct: 1 },
                            { q: "A positive TB skin test (Mantoux) is an example of which type of hypersensitivity?", options: ["Type I (Anaphylactic)", "Type II (Cytotoxic)", "Type III (Immune Complex)", "Type IV (Delayed)"], correct: 3 },
                            { q: "Which cell type is the primary target of the HIV virus?", options: ["Neutrophils", "CD4+ Helper T Cells", "B Cells", "Platelets"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Immunology Fundamentals',
                        questions: [
                            { q: "Which of the following is part of the Innate Immune System?", options: ["T-Cells", "B-Cells", "Antibodies", "Skin and Mucous Membranes"], correct: 3 },
                            { q: "What is the main function of Plasma Cells?", options: ["Phagocytosis", "Secretion of Antibodies", "Direct killing of infected cells", "Antigen presentation"], correct: 1 },
                            { q: "Herd immunity protects a population when:", options: ["Everyone is vaccinated", "A high percentage is immune", "No one is infected", "Antibiotics are available"], correct: 1 },
                            { q: "An autoimmune disease occurs when:", options: ["The immune system is weak", "The body attacks its own cells", "Bacteria invade the blood", "Vaccines fail to work"], correct: 1 },
                            { q: "Which type of blood cell releases histamine involved in allergic reactions?", options: ["Neutrophils", "Basophils/Mast Cells", "Macrophages", "Monocytes"], correct: 1 },
                            { q: "The process of 'Opsonization' involves:", options: ["Killing virus-infected cells", "Coating pathogens to enhance phagocytosis", "Producing fever", "Replicating DNA"], correct: 1 },
                            { q: "Which immunoglobulin is the first to be produced in response to an infection?", options: ["IgG", "IgA", "IgM", "IgE"], correct: 2 },
                            { q: "DiGeorge Syndrome is characterized by a deficiency in:", options: ["B-Cells", "T-Cells (Thymus aplasia)", "Phagocytes", "Complement proteins"], correct: 1 },
                            { q: "The 'Rubor' in inflammation refers to:", options: ["Swelling", "Pain", "Redness", "Heat"], correct: 2 },
                            { q: "Which of the following is an example of Passive Artificial Immunity?", options: ["Vaccination", "Recovering from Chickenpox", "Breastfeeding", "Injection of Antivenom (IgG)"], correct: 3 }
                        ]
                    }
                ]
            },
            {
                id: 20201, code: "NUR 201", title: "Community Health Nursing", icon: "ph-house-line", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Foundations of Community Health',
                        body: `
                            <h3>Health of Populations</h3>
                            <p>Community health focuses on the physical, mental, and social well-being of the people in a specific geographic region.</p>
                            <p><strong>Core Functions:</strong> Assessment, Policy Development, Assurance.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Epidemiology 101',
                        body: `
                            <h3>The Study of Disease</h3>
                            <p>Analyzing the distribution and determinants of health and disease conditions.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Epidemiological Triad</h4>
                                <img src="assets/epidemiological_triad.png" alt="Epidemiological Triad" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Host, Agent, and Environment interactions.</p>
                            </div>
                            
                            <p><strong>Incidence:</strong> New cases.</p>
                            <p><strong>Prevalence:</strong> Total existing cases.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Levels of Prevention',
                        body: `
                            <h3>Stopping Disease Before It Starts</h3>
                            <p>Public health interventions are categorized into three levels.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The Prevention Pyramid</h4>
                                <img src="assets/prevention_levels.png" alt="Levels of Prevention Pyramid" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Primary, Secondary, and Tertiary Prevention.</p>
                            </div>
                            
                            <ul>
                                <li><strong>Primary:</strong> Prevention (Vaccines, Education, Sanitation).</li>
                                <li><strong>Secondary:</strong> Screening (Mammograms, BP checks, Pap smears).</li>
                                <li><strong>Tertiary:</strong> Rehab/Management (PT for stroke, Insulin for diabetes).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Environmental Health',
                        body: `
                            <h3>The World Around Us</h3>
                            <p>Impact of air, water, and soil on human health.</p>
                            <ul>
                                <li><strong>Air Quality:</strong> Asthma triggers, pollutants (PM2.5).</li>
                                <li><strong>Water Quality:</strong> Cholera, Lead poisoning (Flint).</li>
                                <li><strong>Vector Control:</strong> Mosquitoes (Malaria, Dengue).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Vulnerable Populations',
                        body: `
                            <h3>Health Disparities</h3>
                            <p>Groups at higher risk for poor health outcomes.</p>
                            <ul>
                                <li><strong>Homelessness:</strong> Mental illness, substance abuse, infectious disease risks.</li>
                                <li><strong>Migrant Workers:</strong> Pesticide exposure, lack of access to care.</li>
                                <li><strong>Elderly:</strong> Social isolation, chronic disease burden.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Communicable Diseases',
                        body: `
                            <h3>Infectious Disease Control</h3>
                            <p><strong>Chain of Infection:</strong> Agent -> Reservoir -> Portal of Exit -> Mode of Transmission -> Portal of Entry -> Susceptible Host.</p>
                            <p><strong>Reporting:</strong> Mandatory reporting of certain diseases (TB, HIV, Meningitis) to the CDC/Local Health Dept.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Disaster Management',
                        body: `
                            <h3>Emergency Preparedness</h3>
                            <ol>
                                <li><strong>Mitigation:</strong> Reducing risks before disaster strikes.</li>
                                <li><strong>Preparedness:</strong> Planning and stocking supplies.</li>
                                <li><strong>Response:</strong> Immediate action (Search and Rescue, Triage).</li>
                                <li><strong>Recovery:</strong> Rebuilding and returning to normal.</li>
                            </ol>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: School Health Nursing',
                        body: `
                            <h3>Protecting Children</h3>
                            <p><strong>Roles:</strong> Screening (Vision/Hearing), monitoring immunizations, managing chronic conditions (Asthma, Diabetes), health education.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Occupational Health',
                        body: `
                            <h3>Workplace Safety</h3>
                            <p>Promoting health and preventing injury in the workplace.</p>
                            <p><strong>Hazards:</strong> Chemical (Solvents), Physical (Noise, Radiation), Biological (Bloodborne pathogens), Ergonomic (Lifting).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Home Health Nursing',
                        body: `
                            <h3>Care in the Community</h3>
                            <p>Providing skilled nursing care in the patient's home.</p>
                            <p><strong>Focus:</strong> Wound care, medication management, patient education, assessing the home environment for safety (fall risks).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Community Health Final Quiz',
                        questions: [
                            { q: "A nurse is administering a flu vaccine. This is an example of which level of prevention?", options: ["Primary", "Secondary", "Tertiary", "Quaternary"], correct: 0 },
                            { q: "Which element of the Epidemiological Triad refers to the external factors affecting the host?", options: ["Agent", "Host", "Environment", "Vector"], correct: 2 },
                            { q: "Conducting blood pressure screenings at a local mall is an example of:", options: ["Primary Prevention", "Secondary Prevention", "Tertiary Prevention", "Health Promotion"], correct: 1 },
                            { q: "Which population is considered 'vulnerable' due to migratory patterns and pesticide exposure?", options: ["Urban office workers", "Migrant farm workers", "School children", "Hospital nurses"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Community Health Foundations',
                        questions: [
                            { q: "Which core function of public health involves collecting and analyzing data on the community's health?", options: ["Assurance", "Policy Development", "Assessment", "Enforcement"], correct: 2 },
                            { q: "An outbreak of disease that spreads across several countries or continents is called a:", options: ["Epidemic", "Endemic", "Pandemic", "Sporadic"], correct: 2 },
                            { q: "Which of the following is an example of Secondary Prevention?", options: ["Nutrition education", "Rehabilitation after stroke", "Screening for Hypertension", "Vaccination"], correct: 2 },
                            { q: "The reservoir in the chain of infection refers to:", options: ["The place where the pathogen lives and grows", "The portal of exit", "The mode of transmission", "The susceptible host"], correct: 0 },
                            { q: "Which agency is primarily responsible for workplace safety in the US?", options: ["CDC", "FDA", "OSHA", "EPA"], correct: 2 },
                            { q: "Providing treatment for a patient with active Tuberculosis helps protect the community. This is an example of:", options: ["Primary Prevention", "Tertiary Prevention", "Quaternary Prevention", "Secondary Prevention (preventing spread)"], correct: 1 },
                            { q: "The number of new cases of a disease in a specific time period is the:", options: ["Prevalence", "Incidence", "Morbidity rate", "Mortality rate"], correct: 1 },
                            { q: "Which factor is NOT part of the Epidemiological Triad?", options: ["Host", "Agent", "Environment", "Time"], correct: 3 },
                            { q: "School nurses are responsible for which of the following?", options: ["Prescribing medication", "Monitoring immunizations", "Diagnosing broken bones", "Performing surgeries"], correct: 1 },
                            { q: "Home health nursing primarily focuses on:", options: ["Acute care in hospital", "Preventive care in clinics", "Skilled care in the patient's residence", "Emergency response"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 20202, code: "NUR 202", title: "Paediatrics Nursing I", icon: "ph-baby", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Growth and Development Overview',
                        body: `
                            <h3>Principles of Growth</h3>
                            <p><strong>Cephalocaudal:</strong> Head to Toe (Control head first, then walking).</p>
                            <p><strong>Proximodistal:</strong> Center to Periphery (Control trunk first, then fingers).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Developmental Milestones',
                        body: `
                            <h3>Key Stages</h3>
                            <ul>
                                <li><strong>Infant (0-1 yr):</strong> Trust vs Mistrust. Smiles at 2 mos, Sits at 6 mos, Walks at 12 mos.</li>
                                <li><strong>Toddler (1-3 yrs):</strong> Autonomy vs Shame. "No!". Potty training.</li>
                                <li><strong>Preschool (3-6 yrs):</strong> Initiative vs Guilt. Magical thinking.</li>
                                <li><strong>School Age (6-12 yrs):</strong> Industry vs Inferiority. Peers become important.</li>
                                <li><strong>Adolescent (12-18 yrs):</strong> Identity vs Role Confusion. Independence.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Growth Charts',
                        body: `
                            <h3>Tracking Progress</h3>
                            <p>Monitoring Height, Weight, and Head Circumference is vital.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Pediatric Growth Chart</h4>
                                <img src="assets/growth_chart.png" alt="Growth Chart Example" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Percentiles indicate relative size compared to peers.</p>
                            </div>
                            
                            <p><strong>Red Flags:</strong> Crossing 2 major percentiles, below 5th or above 95th.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Fetal & Newborn Circulation',
                        body: `
                            <h3>Transition to Life</h3>
                            <p>Fetal circulation bypasses the lungs via shunts.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Fetal Circulation Shunts</h4>
                                <img src="assets/fetal_circulation.png" alt="Fetal Circulation Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Ductus Venosus, Foramen Ovale, Ductus Arteriosus.</p>
                            </div>
                            
                            <p><strong>First Breath:</strong> Lungs expand, vascular resistance drops, shunts close.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Immunizations',
                        body: `
                            <h3>Schedule</h3>
                            <ul>
                                <li><strong>Birth:</strong> Hep B.</li>
                                <li><strong>2 Month:</strong> B-Dr. HIP (Hep B, DTaP, Rotavirus, Hib, IPV, PCV).</li>
                                <li><strong>12 Month:</strong> MMR, Varicella, Hep A.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Pediatric Assessment',
                        body: `
                            <h3>Head to Toe</h3>
                            <p><strong>Approach:</strong> Least invasive to most invasive (Ears/throat last). Play games.</p>
                            <p><strong>Vitals:</strong> HR and RR are faster in children. BP is lower.</p>
                            <p><strong>Fontanelles:</strong> Posterior closes by 2 mos, Anterior by 18 mos.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Respiratory Disorders',
                        body: `
                            <h3>Common Issues</h3>
                            <ul>
                                <li><strong>Croup:</strong> "Barking" cough, stridor. Steeple sign.</li>
                                <li><strong>Epiglottitis:</strong> Emergency! Drooling, Dysphagia, Distress. "Tripod" position. Do NOT examine throat.</li>
                                <li><strong>RSV/Bronchiolitis:</strong> Mucus, wheezing. Suction is key.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Congenital Heart Defects',
                        body: `
                            <h3>Structural Defects</h3>
                            <p><strong>Acyanotic (L to R shunt):</strong> VSD, ASD, PDA. Increased pulmonary flow.</p>
                            <p><strong>Cyanotic (R to L shunt):</strong> Tetralogy of Fallot (Tet Spell - Squatting helps). Decreased pulmonary flow.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Fluid & Electrolytes',
                        body: `
                            <h3>Dehydration</h3>
                            <p>Children dehydrate faster due to higher metabolic rate and BSA.</p>
                            <p><strong>Signs:</strong> Sunken fontanelle, dry mucus membranes, no tears, tachycardia.</p>
                            <p><strong>Tx:</strong> Oral Rehydration Solution (ORS) or IV bolus (20mL/kg).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Pediatric Safety',
                        body: `
                            <h3>Injury Prevention</h3>
                            <ul>
                                <li><strong>Infants:</strong> SIDS (Back to sleep), Choking (small parts).</li>
                                <li><strong>Toddlers:</strong> Poisoning, Drowning.</li>
                                <li><strong>School Age:</strong> Bikes/Helmets.</li>
                                <li><strong>Teens:</strong> MVA, Substance abuse, Suicide/Depression.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Pediatrics Final Quiz',
                        questions: [
                            { q: "At what age should an infant typically double their birth weight?", options: ["4 months", "6 months", "9 months", "12 months"], correct: 1 },
                            { q: "Which of the following is a sign of Epiglottitis?", options: ["Barking cough", "Drooling", "Runny nose", "Ear pain"], correct: 1 },
                            { q: "In fetal circulation, what structure connects the Pulmonary Artery to the Aorta?", options: ["Foramen Ovale", "Ductus Venosus", "Ductus Arteriosus", "Vena Cava"], correct: 2 },
                            { q: "Erikson's stage of development for a toddler is:", options: ["Trust vs Mistrust", "Autonomy vs Shame/Doubt", "Initiative vs Guilt", "Industry vs Inferiority"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Pediatric Nursing Essentials',
                        questions: [
                            { q: "In which direction does infant growth and development proceed?", options: ["Feet to Head", "Cephalocaudal (Head to Toe)", "Distal to Proximal", "Randomly"], correct: 1 },
                            { q: "Which fontanelle typically closes by 2 months of age?", options: ["Anterior", "Posterior", "Mastoid", "Sphenoid"], correct: 1 },
                            { q: "The 'Tet Spell' (hypercyanotic spell) is associated with which congenital heart defect?", options: ["VSD", "ASD", "Tetralogy of Fallot", "PDA"], correct: 2 },
                            { q: "What is the primary concern for a child with RSV/Bronchiolitis?", options: ["Dehydration", "Airway obstruction from mucus", "Hearing loss", "Skin rash"], correct: 1 },
                            { q: "Which vaccine marks the start of the immunization schedule at birth?", options: ["MMR", "Hepatitis B", "Polio", "Rotavirus"], correct: 1 },
                            { q: "A 4-year-old child believes their thoughts can cause events. This is called:", options: ["Logical reasoning", "Magical thinking", "Abstract thinking", "Egocentrism"], correct: 1 },
                            { q: "What is the most accurate method to measure urine output in a non-potty trained infant?", options: ["Estimating wet diapers", "Weighing diapers", "Catheterization", "Asking parents"], correct: 1 },
                            { q: "An infant with sunken fontanelles and dry mucous membranes is likely suffering from:", options: ["Overhydration", "Dehydration", "Meningitis", "Hydrocephalus"], correct: 1 },
                            { q: "When assessing a toddler, which part of the exam should be done last?", options: ["Listening to heart", "Listening to lungs", "Inspecting ears and throat", "Palpating abdomen"], correct: 2 },
                            { q: "Which activity is developmentally appropriate for a school-age child?", options: ["Playing Peek-a-boo", "Parallel play with blocks", "Joining a sports team", "Building a complex identity"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 20204, code: "NUR 204", title: "Nutrition and Health", icon: "ph-carrot", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Macronutrients',
                        body: `
                            <h3>Fueling the Body</h3>
                            <ul>
                                <li><strong>Carbohydrates (4 kcal/g):</strong> Primary energy source. Simple (Sugar) vs Complex (Starch/Fiber).</li>
                                <li><strong>Proteins (4 kcal/g):</strong> Tissue repair, enzymes. Essential vs Non-essential amino acids.</li>
                                <li><strong>Fats (9 kcal/g):</strong> Energy storage, insulation, hormone synthesis. Saturated vs Unsaturated.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Balanced Plate',
                        body: `
                            <h3>Guidelines</h3>
                            <p>Modern guidelines focus on portion control and variety.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">MyPlate Guide</h4>
                                <img src="assets/myplate.png" alt="MyPlate Food Guide" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Half your plate should be fruits and vegetables.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Micronutrients',
                        body: `
                            <h3>Vitamins & Minerals</h3>
                            <ul>
                                <li><strong>Vitamin C:</strong> Immune function, collagen (Scurvy).</li>
                                <li><strong>Vitamin D:</strong> Calcium absorption (Rickets).</li>
                                <li><strong>Iron:</strong> Hemoglobin formation (Anemia). Enhancers: Vit C. Inhibitors: Calcium/Tea.</li>
                                <li><strong>Sodium:</strong> Fluid balance. Excess = HTN.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Body Mass Index (BMI)',
                        body: `
                            <h3>Weight Management</h3>
                            <p><strong>Formula:</strong> Weight (kg) / Height (m)².</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">BMI Categories</h4>
                                <img src="assets/bmi_chart.png" alt="BMI Chart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Screening tool for weight categories.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Therapeutic Diets',
                        body: `
                            <h3>Nutrition as Medicine</h3>
                            <ul>
                                <li><strong>Diabetic:</strong> Carb counting, low Glycemic Index.</li>
                                <li><strong>Cardiac (DASH):</strong> Low Sodium, Low Saturated Fat.</li>
                                <li><strong>Renal:</strong> Low Protein, Low K+, Low Phos.</li>
                                <li><strong>NPO:</strong> Nothing by mouth (Pre-op).</li>
                                <li><strong>Clear Liquid:</strong> Water, broth, jello (Post-op).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Enteral vs Parenteral',
                        body: `
                            <h3>Artificial Nutrition</h3>
                            <p><strong>Enteral (Tube Feeding):</strong> Uses the GI tract (NG Tube, PEG). Always preferred if gut works ("If the gut works, use it").</p>
                            <p><strong>Parenteral (TPN):</strong> IV nutrition. Central line required. High infection risk.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Nutritional Assessment',
                        body: `
                            <h3>Screening</h3>
                            <p><strong>ABCD Approach:</strong></p>
                            <ul>
                                <li><strong>Anthropometric:</strong> Ht, Wt, BMI.</li>
                                <li><strong>Biochemical:</strong> Albumin (long term), Pre-albumin (short term), Hemoglobin.</li>
                                <li><strong>Clinical:</strong> Skin turgor, muscle wasting.</li>
                                <li><strong>Dietary:</strong> 24hr recall.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Life Cycle Nutrition',
                        body: `
                            <h3>Varying Needs</h3>
                            <ul>
                                <li><strong>Pregnancy:</strong> Folic acid (Neural tube), increased calories.</li>
                                <li><strong>Infants:</strong> Breast milk/Formula only for 6 mos. Introduce solids (Iron-fortified cereal) at 6 mos.</li>
                                <li><strong>Elderly:</strong> Slower metabolism, decreased thirst drive (Dehydration risk).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Eating Disorders',
                        body: `
                            <h3>Psychiatric conditions</h3>
                            <ul>
                                <li><strong>Anorexia Nervosa:</strong> Restriction, fear of weight gain, body dysmorphia. Risk: Arrhythmias (Low K+).</li>
                                <li><strong>Bulimia Nervosa:</strong> Binge and Purge. Risk: Tooth decay, esophageal tears.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Food Safety',
                        body: `
                            <h3>Preventing Illness</h3>
                            <p><strong>Temperature Danger Zone:</strong> 40°F - 140°F (4°C - 60°C).</p>
                            <p><strong>Cross-contamination:</strong> Raw meat vs Veggies.</p>
                            <p><strong>Hand Hygiene:</strong> 20 seconds warm water and soap.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Nutrition Final Quiz',
                        questions: [
                            { q: "Which macronutrient provides 9 kcal per gram?", options: ["Carbohydrate", "Protein", "Fat", "Alcohol"], correct: 2 },
                            { q: "A BMI of 27 is considered:", options: ["Underweight", "Normal", "Overweight", "Obese"], correct: 2 },
                            { q: "Which vitamin enhances the absorption of Iron?", options: ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin B12"], correct: 0 },
                            { q: "What is the primary risk associated with Total Parenteral Nutrition (TPN)?", options: ["Aspiration", "Infection (Sepsis)", "Diarrhea", "Gastric Ulcers"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Clinical Nutrition',
                        questions: [
                            { q: "Which laboratory value is the best indicator of long-term nutritional status?", options: ["Pre-albumin", "Albumin", "Hemoglobin", "Transferrin"], correct: 1 },
                            { q: "A patient with hypertension should be placed on which diet?", options: ["Low Residue", "DASH (Dietary Approaches to Stop Hypertension)", "High Protein", "Clear Liquid"], correct: 1 },
                            { q: "During pregnancy, increased intake of Folic Acid prevents:", options: ["Anemia", "Neural Tube Defects", "Morning Sickness", "Gestational Diabetes"], correct: 1 },
                            { q: "The temperature danger zone for food safety is:", options: ["0-32°F", "40-140°F", "150-200°F", "Above 212°F"], correct: 1 },
                            { q: "Which vitamin is synthesized by the skin upon exposure to sunlight?", options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"], correct: 2 },
                            { q: "Marasmus is a deficiency of:", options: ["Protein only", "Calories (Total Energy)", "Vitamin C", "Iron"], correct: 1 },
                            { q: "Which of the following is a symptom of hypoglycemia?", options: ["Bradycardia", "Sweating/Tremors", "Warm dry skin", "Fruity breath"], correct: 1 },
                            { q: "Patients with Celiac disease must avoid:", options: ["Dairy", "Gluten (Wheat, Barley, Rye)", "Peanuts", "Shellfish"], correct: 1 },
                            { q: "Enteral nutrition (tube feeding) is contraindicated in patients with:", options: ["Throat cancer", "Paralytic ileus (non-functioning gut)", "Dysphagia", "Coma"], correct: 1 },
                            { q: "Vitamin K is essential for:", options: ["Vision", "Blood Clotting", "Bone health", "Energy production"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 20205, code: "NUR 205", title: "Pharmacology", icon: "ph-pill", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Principles of Pharmacology',
                        body: `
                            <h3>The Study of Drugs</h3>
                            <p><strong>Pharmacokinetics:</strong> What the body does to the drug (ADME).</p>
                            <p><strong>Pharmacodynamics:</strong> What the drug does to the body (Receptor binding).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Pharmacokinetics (ADME)',
                        body: `
                            <h3>The Journey of a Drug</h3>
                            <p>Crucial for understanding dosing and toxicity.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The ADME Cycle</h4>
                                <img src="assets/pharmacokinetics.png" alt="ADME Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Absorption, Distribution, Metabolism, Excretion.</p>
                            </div>
                            
                            <ul>
                                <li><strong>Absorption:</strong> Bioavailability (IV = 100%, Oral < 100%). First Pass Effect.</li>
                                <li><strong>Distribution:</strong> Blood flow, protein binding (Albumin).</li>
                                <li><strong>Metabolism:</strong> Liver (CYP450 enzymes). Biotransformation.</li>
                                <li><strong>Excretion:</strong> Kidneys (GFR). Half-life.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Drug Half-Life & Dosing',
                        body: `
                            <h3>Time vs Concentration</h3>
                            <p><strong>Half-Life (t½):</strong> Time required for drug concentration to decrease by 50%.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Elimination Curve</h4>
                                <img src="assets/half_life_graph.png" alt="Drug Half-Life Graph" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Takes ~4-5 half-lives to reach steady state or clear the drug.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Routes of Administration',
                        body: `
                            <h3>Delivery Methods</h3>
                            <ul>
                                <li><strong>Enteral:</strong> PO (Oral), SL (Sublingual), Rectal.</li>
                                <li><strong>Parenteral:</strong> IV (Intravenous), IM (Intramuscular), SC (Subcutaneous), ID (Intradermal).</li>
                                <li><strong>Topical/Inhaled:</strong> Transdermal patches, Nebulizers.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Antibiotics',
                        body: `
                            <h3>Fighting Bacteria</h3>
                            <p><strong>Classes:</strong> Penicillins (Allergy risk), Cephalosporins, Tetracyclines (Teeth staining), Aminoglycosides (Ototoxicity).</p>
                            <p><strong>Resistance:</strong> MRSA, VRE. Importance of completing the full course.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Analgesics',
                        body: `
                            <h3>Pain Management</h3>
                            <ul>
                                <li><strong>Non-Opioids:</strong> Acetaminophen (Liver risk), NSAIDs (Ibuprofen - Kidney/Stomach risk).</li>
                                <li><strong>Opioids:</strong> Morphine, Fentanyl. Side effects: Respiratory Depression (Reversal: Naloxone/Narcan), Constipation.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Cardiovascular Drugs',
                        body: `
                            <h3>Heart & Vessels</h3>
                            <ul>
                                <li><strong>Beta Blockers (-olol):</strong> Lower HR and BP. Caution in Asthma.</li>
                                <li><strong>ACE Inhibitors (-pril):</strong> Lower BP. Side effect: Dry Cough, Angioedema.</li>
                                <li><strong>Diuretics:</strong> Furosemide (Lasix). Watch K+ levels.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Psychotropics',
                        body: `
                            <h3>Mental Health</h3>
                            <ul>
                                <li><strong>SSRI:</strong> Fluoxetine. Serotonin Syndrome risk.</li>
                                <li><strong>Benzodiazepines:</strong> Lorazepam. Sedation, addiction risk.</li>
                                <li><strong>Lithium:</strong> Bipolar. Narrow therapeutic index (Toxic > 1.5).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: The "Rights" of Medication',
                        body: `
                            <h3>Safety Checks</h3>
                            <p>1. Right Patient</p>
                            <p>2. Right Drug</p>
                            <p>3. Right Dose</p>
                            <p>4. Right Route</p>
                            <p>5. Right Time</p>
                            <p>6. Right Documentation</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Anticoagulants',
                        body: `
                            <h3>Blood Thinners</h3>
                            <ul>
                                <li><strong>Heparin:</strong> PTT. Antidote: Protamine Sulfate.</li>
                                <li><strong>Warfarin (Coumadin):</strong> PT/INR (Target 2-3). Antidote: Vitamin K. Avoid leafy greens.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Pharmacology Final Quiz',
                        questions: [
                            { q: "What is the primary organ responsible for drug metabolism?", options: ["Kidney", "Liver", "Stomach", "Lungs"], correct: 1 },
                            { q: "Which antidote is used for Opioid overdose?", options: ["Vitamin K", "Protamine Sulfate", "Naloxone", "Flumazenil"], correct: 2 },
                            { q: "A patient on Warfarin should maintain a consistent intake of which food?", options: ["Dairy", "Leafy Green Vegetables", "Red Meat", "Citrus Fruits"], correct: 1 },
                            { q: "Which route of administration has 100% bioavailability?", options: ["Oral", "Subcutaneous", "Intravenous", "Rectal"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Pharmacology Review',
                        questions: [
                            { q: "The 'First Pass Effect' primarily affects drugs administered via which route?", options: ["Intravenous", "Oral", "Sublingual", "Transdermal"], correct: 1 },
                            { q: "Which class of drugs is most commonly associated with Ototoxicity (hearing loss)?", options: ["Penicillins", "Aminoglycosides", "Macrolides", "Cephalosporins"], correct: 1 },
                            { q: "Naloxone (Narcan) is the antidote for:", options: ["Benzodiazepines", "Opioids", "Acetaminophen", "Beta Blockers"], correct: 1 },
                            { q: "A patient taking a MAOI should avoid foods containing:", options: ["Gluten", "Tyramine", "Lactose", "Vitamin K"], correct: 1 },
                            { q: "The therapeutic range for Lithium is:", options: ["0.6 - 1.2 mEq/L", "2.0 - 3.0 mEq/L", "10 - 20 mEq/L", "0.1 - 0.5 mEq/L"], correct: 0 },
                            { q: "ACE Inhibitors typically end in which suffix?", options: ["-olol", "-pril", "-sartan", "-pine"], correct: 1 },
                            { q: "Which drug is used to treat anaphylactic shock?", options: ["Diphenhydramine", "Epinephrine", "Albuterol", "Prednisone"], correct: 1 },
                            { q: "Digoxin toxicity is often precipitated by:", options: ["Hyperkalemia", "Hypokalemia", "Hypernatremia", "Hyponatremia"], correct: 1 },
                            { q: "Which of the following is a fast-acting insulin?", options: ["Glargine (Lantus)", "Lispro (Humalog)", "NPH", "Detemir"], correct: 1 },
                            { q: "Proton Pump Inhibitors (PPIs) work by:", options: ["Neutralizing stomach acid", "Blocking histamine receptors", "Inhibiting the H+/K+ ATPase pump", "Coating the stomach lining"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 20206, code: "NUR 206", title: "Medical Surgical Nursing 2", icon: "ph-bed", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Oncology Nursing',
                        body: `
                            <h3>Cancer Biology</h3>
                            <p>Uncontrolled cell growth. Benign vs Malignant.</p>
                            <p><strong>Warning Signs (CAUTION):</strong> Change in bowel habits, A sore that doesn't heal, Unusual bleeding, Thickening/Lump, Indigestion, Obvious change in wart/mole, Nagging cough.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Cancer Staging (TNM)',
                        body: `
                            <h3>Classification</h3>
                            <p>Determines prognosis and treatment.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">TNM Staging System</h4>
                                <img src="assets/tnm_staging.png" alt="TNM Staging Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: T = Tumor size, N = Node involvement, M = Metastasis.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Diabetes Mellitus',
                        body: `
                            <h3>Endocrine Disorder</h3>
                            <p><strong>Diagnosis:</strong> A1C > 6.5%, Fasting Glucose > 126.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Type 1 vs Type 2</h4>
                                <img src="assets/diabetes_type1_vs_2.png" alt="Diabetes Comparison" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Autoimmune destruction vs Insulin resistance.</p>
                            </div>
                            
                            <p><strong>Complications:</strong> DKA (Type 1), HHS (Type 2), Neuropathy, Retinopathy.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Stroke (CVA)',
                        body: `
                            <h3>Brain Attack</h3>
                            <p><strong>Ischemic (Clot) vs Hemorrhagic (Bleed).</strong> Time is brain.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Stroke Recognition</h4>
                                <img src="assets/stroke_fast.png" alt="FAST Acronym" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Facial drooping, Arm weakness, Speech difficulty, Time (Call 911).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Thyroid Disorders',
                        body: `
                            <h3>Regulating Metabolism</h3>
                            <ul>
                                <li><strong>Hyperthyroidism (Graves'):</strong> Heat intolerance, weight loss, exophthalmos. TSH Low, T3/T4 High.</li>
                                <li><strong>Hypothyroidism (Hashimoto's):</strong> Cold intolerance, weight gain, fatigue. TSH High, T3/T4 Low.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Seizure Disorders',
                        body: `
                            <h3>Neurological Safety</h3>
                            <p><strong>During Seizure:</strong> Turn to side, loosen clothing, nothing in mouth, time the seizure, protect head.</p>
                            <p><strong>Post-Ictal:</strong> Confusion, sleepiness.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Spinal Cord Injury',
                        body: `
                            <h3>Levels of Injury</h3>
                            <p><strong>C-Spine:</strong> Respiratory risk (C3-C5 keeps diaphragm alive). Tetraplegia.</p>
                            <p><strong>Autonomic Dysreflexia (T6+):</strong> Emergency! Hypertensive crisis triggered by distended bladder/bowel. Sit up, remove stimulus.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Acute Kidney Injury (AKI)',
                        body: `
                            <h3>Renal Failure</h3>
                            <ul>
                                <li><strong>Pre-renal:</strong> Reduced perfusion (Hypovolemia, Heart Failure).</li>
                                <li><strong>Intra-renal:</strong> Direct damage (Nephrotoxic drugs, Contrast dye).</li>
                                <li><strong>Post-renal:</strong> Obstruction (Kidney stones, BPH).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Burn Nursing',
                        body: `
                            <h3>Trauma Care</h3>
                            <p><strong>Rule of Nines:</strong> Estimate TBSA.</p>
                            <p><strong>Fluid Resuscitation (Parkland Formula):</strong> 4mL x kg x %TBSA. Give 1/2 in first 8 hours.</p>
                            <p><strong>Risk:</strong> Infection, Hypothermia.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Palliative & Hospice Care',
                        body: `
                            <h3>End of Life</h3>
                            <p><strong>Palliative:</strong> Symptom management for serious illness (can receive curative tx).</p>
                            <p><strong>Hospice:</strong> Terminal (<6 mos), comfort care only.</p>
                            <p><strong>Symptoms:</strong> Cheyne-Stokes respirations.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'MedSurg II Final Quiz',
                        questions: [
                            { q: "Which finding is consistent with Hyperthyroidism?", options: ["Weight gain", "Cold intolerance", "Exophthalmos", "Bradycardia"], correct: 2 },
                            { q: "What is the priority intervention for Autonomic Dysreflexia?", options: ["Lie flat", "Sit the patient up", "Administer fluids", "Start CPR"], correct: 1 },
                            { q: "In the TNM staging system, what does 'N' stand for?", options: ["Neoplasm", "Node", "Number", "Necrosis"], correct: 1 },
                            { q: "Which type of diabetes involves autoimmune destruction of beta cells?", options: ["Type 1", "Type 2", "Gestational", "Insipidus"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: MedSurg II Advanced Concepts',
                        questions: [
                            { q: "Which mnemonic is used to recognize the warning signs of cancer?", options: ["FAST", "CAUTION", "ABCDE", "RICE"], correct: 1 },
                            { q: "A patient with a spinal cord injury at T6 or above is at risk for which life-threatening condition?", options: ["Autonomic Dysreflexia", "Spina Bifida", "Guillain-Barre Syndrome", "Myasthenia Gravis"], correct: 0 },
                            { q: "In the Parkland Formula for burn resuscitation, what percentage of fluid is given in the first 8 hours?", options: ["25%", "33%", "50%", "100%"], correct: 2 },
                            { q: "Cheyne-Stokes respirations are commonly observed in which stage of illness?", options: ["Acute infection", "Recovery", "End of Life", "Early diagnosis"], correct: 2 },
                            { q: "Which electrolyte imbalance is common in the oliguric phase of Acute Kidney Injury?", options: ["Hypokalemia", "Hyperkalemia", "Hypercalcemia", "Hypernatremia"], correct: 1 },
                            { q: "Graves' disease is an autoimmune form of:", options: ["Hypothyroidism", "Hyperthyroidism", "Addison's Disease", "Cushing's Syndrome"], correct: 1 },
                            { q: "The 'FAST' acronym for stroke stands for:", options: ["Face, Arm, Speech, Time", "Face, Airway, Speech, Tongue", "First, Aid, Stroke, Treatment", "Face, Arms, Stomach, Toes"], correct: 0 },
                            { q: "A Hemoglobin A1C of 8.0% indicates:", options: ["Normal glucose control", "Pre-diabetes", "Poorly controlled Diabetes", "Hypoglycemia"], correct: 2 },
                            { q: "The priority nursing intervention during a seizure is:", options: ["Restraining the patient", "Inserting an airway", "Protecting the head and airway safety", "Giving oral medication"], correct: 2 },
                            { q: "Which type of shock is caused by severe allergic reaction?", options: ["Hypovolemic", "Septic", "Anaphylactic", "Cardiogenic"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 20207, code: "NUR 207", title: "Microbiology", icon: "ph-virus", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: World of Microbes',
                        body: `
                            <h3>Introduction</h3>
                            <p>Study of microscopic organisms: Bacteria, Viruses, Fungi, Parasites.</p>
                            <p><strong>Pathogens vs Normal Flora:</strong> Not all bugs are bad. Normal flora aids digestion and produces vitamins.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Bacteriology',
                        body: `
                            <h3>Bacterial Structure</h3>
                            <p>Prokaryotic (No nucleus). Cell wall determines Gram stain (Positive = Purple, Negative = Pink).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Bacterial Morphology</h4>
                                <img src="assets/bacterial_shapes.png" alt="Bacterial Shapes Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Cocci, Bacilli, and Spirilla.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Virology',
                        body: `
                            <h3>Viral Structure</h3>
                            <p>Acellular. Intracellular parasites (Need a host to replicate).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Viral Anatomy</h4>
                                <img src="assets/viral_structure.png" alt="Viral Structure Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Capsid and Genetic Material.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Chain of Infection',
                        body: `
                            <h3>Breaking the Chain</h3>
                            <p>Essential for Infection Control.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Infection Cycle</h4>
                                <img src="assets/chain_of_infection.png" alt="Chain of Infection Cycle" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Interventions aimed at breaking links (e.g., Hand Hygiene breaks Transmission).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Immunology in Micro',
                        body: `
                            <h3>Host Defenses</h3>
                            <ul>
                                <li><strong>Innate:</strong> Skin, Mucous membranes, Phagocytes (First line).</li>
                                <li><strong>Adaptive:</strong> Antibodies (B-Cells), Cytotoxic T-Cells (Specific).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Common Pathogens',
                        body: `
                            <h3>Key Offenders</h3>
                            <ul>
                                <li><strong>Staph aureus:</strong> Skin infections, MRSA.</li>
                                <li><strong>E. coli:</strong> UTI (Gram negative rod).</li>
                                <li><strong>C. diff:</strong> Antibiotic-associated diarrhea (Spores). Handwashing with SOAP required (Sanitizer doesn't kill spores).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Sterilization vs Disinfection',
                        body: `
                            <h3>Cleaning Levels</h3>
                            <p><strong>Sterilization:</strong> Kills ALL life forms, including spores (Autoclave).</p>
                            <p><strong>Disinfection:</strong> Reduces pathogens but not spores (Bleach wipes).</p>
                            <p><strong>Antiseptic:</strong> Safe for skin (Alcohol, Betadine).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Fungi & Parasites',
                        body: `
                            <h3>Other Microbes</h3>
                            <ul>
                                <li><strong>Fungi (Mycoses):</strong> Candida (Yeast infection), Tinea (Ringworm). Tx: Antifungals.</li>
                                <li><strong>Parasites:</strong> Malaria (Plasmodium), Giardia (Protozoa), Helios (Worms).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Specimen Collection',
                        body: `
                            <h3>Garbage In, Garbage Out</h3>
                            <p><strong>Blood Cultures:</strong> Collect BEFORE antibiotics. 2 sites.</p>
                            <p><strong>Urine:</strong> Clean catch midstream.</p>
                            <p><strong>Sputum:</strong> Deep cough, early morning.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Emerging Diseases',
                        body: `
                            <h3>Global Health</h3>
                            <p><strong>Zoonosis:</strong> Animals to Humans (COVID-19, Ebola).</p>
                            <p><strong>Superbugs:</strong> MDR-TB, CRE. driven by antibiotic overuse.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Microbiology Final Quiz',
                        questions: [
                            { q: "Which structure determines if a bacteria is Gram Positive or Negative?", options: ["Ribosomes", "Cell Wall", "Flagella", "DNA"], correct: 1 },
                            { q: "Which link in the chain of infection is broken by hand hygiene?", options: ["Reservoir", "Portal of Exit", "Mode of Transmission", "Portal of Entry"], correct: 2 },
                            { q: "What is unique about Clostridium difficile (C. diff)?", options: ["Transient flora", "Spore-forming", "Viral origin", "Airborne transmission"], correct: 1 },
                            { q: "Sterilization differs from disinfection because it:", options: ["Kills spores", "Is used on skin", "Is faster", "Uses less heat"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Microbiology Fundamentals',
                        questions: [
                            { q: "Which shape describes cocci bacteria?", options: ["Rod-shaped", "Spherical", "Spiral", "Comma-shaped"], correct: 1 },
                            { q: "Viruses are considered obligate intracellular parasites because they:", options: ["Kill only humans", "Cannot replicate without a host cell", "Are visible to the naked eye", "Have a cell wall"], correct: 1 },
                            { q: "The single most important measure to prevent the spread of infection is:", options: ["Antibiotics", "Facemasks", "Hand Hygiene", "Isolation"], correct: 2 },
                            { q: "Which immunoglobulin is the first responder to a new infection (acute phase)?", options: ["IgG", "IgA", "IgM", "IgE"], correct: 2 },
                            { q: "Superbugs like MRSA are resistant to:", options: ["Vancomycin", "Methicillin", "All antibiotics", "Soap and water"], correct: 1 },
                            { q: "Which of the following is caused by a fungal infection (Mycosis)?", options: ["Malaria", "Ringworm (Tinea)", "Influenza", "Tuberculosis"], correct: 1 },
                            { q: "When collecting a blood culture, it is critical to:", options: ["Collect it after starting antibiotics", "Collect from only one site", "Collect from two different sites", "Freeze the sample immediately"], correct: 2 },
                            { q: "Zoonosis refers to diseases transmitted from:", options: ["Humans to Humans", "Insects to Humans", "Animals to Humans", "Plants to Humans"], correct: 2 },
                            { q: "Gram positive bacteria stain which color?", options: ["Pink", "Purple", "Red", "Green"], correct: 1 },
                            { q: "Alcohol-based hand sanitizer is INEFFECTIVE against which pathogen?", options: ["Influenza Virus", "Staphylococcus aureus", "Clostridium difficile (C. diff) spores", "E. coli"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 20208, code: "NUR 208", title: "Parasitology", icon: "ph-bug", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Intro to Parasitology',
                        body: `
                            <h3>Host-Parasite Relationship</h3>
                            <p><strong>Parasitism:</strong> One organism benefits at the expense of the other.</p>
                            <p><strong>Hosts:</strong> Definitive (Sexual reproduction), Intermediate (Asexual reproduction).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Malaria (Plasmodium)',
                        body: `
                            <h3>The Global Killer</h3>
                            <p>Transmitted by female Anopheles mosquito.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Life Cycle</h4>
                                <img src="assets/malaria_cycle.png" alt="Malaria Life Cycle" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Sporozoites (Infective) -> Merozoites (Pathogenic in RBCs).</p>
                            </div>
                            
                            <p><strong>Tx:</strong> Artemether-Lumefantrine (AL), Chloroquine.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Protozoa (Amoebas)',
                        body: `
                            <h3>Entamoeba histolytica</h3>
                            <p><strong>Amoebic Dysentery:</strong> Bloody stool with mucus.</p>
                            <p><strong>Cyst vs Trophozoite:</strong> Cyst is infective (survives environment), Trophozoite causes disease in gut.</p>
                            <p><strong>Tx:</strong> Metronidazole (Flagyl).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Flagellates (Giardia)',
                        body: `
                            <h3>Giardia lamblia</h3>
                            <p><strong>Beaver Fever:</strong> Contaminated water.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Giardia Trophozoite</h4>
                                <img src="assets/giardia_trophozoite.png" alt="Giardia Trophozoite" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Distinctive "face" appearance with two nuclei.</p>
                            </div>
                            
                            <p><strong>Symptoms:</strong> Greasy, foul-smelling stool (Steatorrhea).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Helminths (Worms)',
                        body: `
                            <h3>Classification</h3>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Worm Types</h4>
                                <img src="assets/helminth_types.png" alt="Helminth Classification" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Nematodes, Cestodes, and Trematodes.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Nematodes (Roundworms)',
                        body: `
                            <h3>Intestinal Roundworms</h3>
                            <ul>
                                <li><strong>Ascaris lumbricoides:</strong> Giant roundworm. Fecal-oral. Loeffler's syndrome (Lungs).</li>
                                <li><strong>Hookworm (Ancylostoma):</strong> Penetrates skin (feet). Causes anemia.</li>
                                <li><strong>Pinworm (Enterobius):</strong> Anal itching at night. Scotch tape test.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Cestodes (Tapeworms)',
                        body: `
                            <h3>Segmented Worms</h3>
                            <p><strong>Taenia saginata:</strong> Beef tapeworm.</p>
                            <p><strong>Taenia solium:</strong> Pork tapeworm. Causes Neurocysticercosis (Brain cysts/Seizures) if eggs ingested.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Trematodes (Flukes)',
                        body: `
                            <h3>Schistosomiasis (Bilharzia)</h3>
                            <p><strong>Vector:</strong> Freshwater Snails.</p>
                            <p><strong>S. haematobium:</strong> Urinary blood (Hematuria). Risk of Bladder Cancer.</p>
                            <p><strong>Tx:</strong> Praziquantel.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Arthropods (Vectors)',
                        body: `
                            <h3>Disease Carriers</h3>
                            <ul>
                                <li><strong>Mosquitoes:</strong> Malaria, Dengue, Yellow Fever.</li>
                                <li><strong>Tsetse Fly:</strong> Sleeping Sickness (Trypanosomiasis).</li>
                                <li><strong>Sandfly:</strong> Leishmaniasis (Kala-azar).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Neglected Tropical Diseases',
                        body: `
                            <h3>NTDs</h3>
                            <p>Group of diseases affecting the poorest populations.</p>
                            <p>Filariasis (Elephantiasis), River Blindness (Onchocerca).</p>
                            <p><strong>Control:</strong> Mass Drug Administration (MDA), WASH (Water, Sanitation, Hygiene).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Parasitology Final Quiz',
                        questions: [
                            { q: "Which parasite causes 'stools that float' (steatorrhea)?", options: ["Ascaris", "Giardia", "Plasmodium", "Schistosoma"], correct: 1 },
                            { q: "What is the vector for Sleeping Sickness?", options: ["Anopheles Mosquito", "Tsetse Fly", "Sandfly", "Tick"], correct: 1 },
                            { q: "Neurocysticercosis is a complication of infection with:", options: ["Beef Tapeworm", "Pork Tapeworm", "Hookworm", "Pinworm"], correct: 1 },
                            { q: "The infective stage of Malaria for humans injected by the mosquito is:", options: ["Merozoite", "Gametocyte", "Sporozoite", "Hypnozoite"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Parasitology Basics',
                        questions: [
                            { q: "The definitive host of a parasite is the one where:", options: ["Asexual reproduction occurs", "Sexual reproduction occurs", "The parasite dies", "No reproduction occurs"], correct: 1 },
                            { q: "Which of the following is the drug of choice for treating Giardia?", options: ["Amoxicillin", "Metronidazole (Flagyl)", "Ciprofloxacin", "Acyclovir"], correct: 1 },
                            { q: "Schistosomiasis uses which freshwater animal as an intermediate host?", options: ["Fish", "Frog", "Snail", "Crab"], correct: 2 },
                            { q: "The 'Scotch Tape Test' is used to diagnose:", options: ["Hookworm", "Roundworm", "Pinworm (Enterobius)", "Tapeworm"], correct: 2 },
                            { q: "Which vector transmits Leishmaniasis?", options: ["Tsetse Fly", "Sandfly", "Anopheles Mosquito", "Tick"], correct: 1 },
                            { q: "Elephantiasis is a complication of which parasitic infection?", options: ["Malaria", "Filariasis", "Hookworm", "Giardiasis"], correct: 1 },
                            { q: "Eating undercooked pork is the primary risk factor for:", options: ["Taenia saginata", "Taenia solium", "Ascaris", "Schistosoma"], correct: 1 },
                            { q: "Hookworms enter the human body primarily through:", options: ["Ingesting eggs", "In halation", "Penetrating the skin (usually feet)", "Mosquito bite"], correct: 2 },
                            { q: "Which parasite invades the lungs causing Loeffler's syndrome?", options: ["Pinworm", "Giardia", "Ascaris lumbricoides", "Tapeworm"], correct: 2 },
                            { q: "Malaria primarily destroys which type of blood cell?", options: ["White Blood Cells", "Red Blood Cells", "Platelets", "Plasma"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Cardiovascular Drugs',
                        body: `
                            <h3>Hemodynamics Control</h3>
                            <p><strong>Beta Blockers (-olol):</strong> Lower HR/BP. Caution in Asthma. Monitor HR.</p>
                            <p><strong>ACE Inhibitors (-pril):</strong> Vasodilation (RAAS inhibition). Side effect: Dry Cough, Angioedema.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Electrophysiology',
                        body: `
                            <h3>Antiarrhythmics</h3>
                            <p>Drugs affecting the cardiac action potential.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cardiac Action Potential</h4>
                                <img src="assets/cardiac_action_potential.png" alt="Cardiac Action Potential Graph" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Sodium, Calcium, and Potassium channel activity affecting heart rhythm.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Renin-Angiotensin System',
                        body: `
                            <h3>BP Regulation</h3>
                            <p>Target for antihypertensives (ACEi, ARBs).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">RAAS Pathway</h4>
                                <img src="assets/raas_system.png" alt="RAAS Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Kidneys release Renin -> Angiotensin II -> Vasoconstriction + Aldosterone.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Diuretics',
                        body: `
                            <h3>Fluid Management</h3>
                            <ul>
                                <li><strong>Loop (Furosemide):</strong> Potassium Wasting. Watch for Hypokalemia.</li>
                                <li><strong>Thiazides (HCTZ):</strong> First line for HTN.</li>
                                <li><strong>K-Sparing (Spironolactone):</strong> Avoid salt substitutes/high K foods.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Pain Management',
                        body: `
                            <h3>Analgesics</h3>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Pain Pathway</h4>
                                <img src="assets/pain_pathway.png" alt="Pain Pathway Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Transduction, Transmission, Perception, Modulation.</p>
                            </div>
                            
                            <p><strong>Opioids:</strong> Respiratory Depression is priority. Antidote: Naloxone.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Psychotropics',
                        body: `
                            <h3>Mental Health Meds</h3>
                            <p><strong>SSRIs (Fluoxetine):</strong> Watch for Serotonin Syndrome. Suicide risk in first weeks.</p>
                            <p><strong>Lithium:</strong> Therapeutic Range 0.6-1.2. Toxic > 1.5. Maintain salt/fluid intake.</p>
                            <p><strong>MAOIs:</strong> Avoid Tyramine (Aged cheese/wine) to prevent Hypertensive Crisis.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Endocrine Drugs',
                        body: `
                            <h3>Hormones</h3>
                            <p><strong>Insulin:</strong> Rapid (Lispro), Short (Regular), Intermediate (NPH), Long (Glargine). Only Regular can be IV.</p>
                            <p><strong>Levothyroxine:</strong> Take on empty stomach in AM.</p>
                            <p><strong>Steroids (Prednisone):</strong> Taper off. Watch for Cushing's signs, hyperglycemia.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Respiratory Drugs',
                        body: `
                            <h3>Airway Management</h3>
                            <p><strong>Beta-Agonists (Albuterol):</strong> Rescue inhaler. Bronchodilation.</p>
                            <p><strong>Anticholinergics (Ipratropium):</strong> Dry secretions.</p>
                            <p><strong>Theophylline:</strong> Narrow therapeutic index (10-20).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Gastrointestinal Drugs',
                        body: `
                            <h3>GI Tract</h3>
                            <p><strong>PPIs (Omeprazole):</strong> Reduce acid. Risk of fractures/C. diff.</p>
                            <p><strong>Antiemetics (Ondansetron):</strong> For nausea (Serotonin antagonist). QT prolongation risk.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Critical Care Drugs',
                        body: `
                            <h3>Emergency Meds</h3>
                            <p><strong>Epinephrine:</strong> Vasopressor, bronchodilator (Anaphylaxis/Cardiac Arrest).</p>
                            <p><strong>Atropine:</strong> For symptomatic Bradycardia.</p>
                            <p><strong>Adenosine:</strong> For SVT (Push fast!).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Pharmacology II Quiz',
                        questions: [
                            { q: "Which diuretic increases the risk of Hyperkalemia?", options: ["Furosemide", "Hydrochlorothiazide", "Spironolactone", "Bumetanide"], correct: 2 },
                            { q: "What is the priority assessment before giving Digoxin?", options: ["Blood Pressure", "Apical Pulse", "Temperature", "Urine Output"], correct: 1 },
                            { q: "Which food must be avoided when taking MAOIs?", options: ["Leafy Greens", "Grapefruit", "Aged Cheese", "Milk"], correct: 2 },
                            { q: "Lisinopril works by acting on which system?", options: ["Sympathetic Nervous System", "RAAS", "Parasympathetic Nervous System", "Central Nervous System"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Advanced Pharmacology',
                        questions: [
                            { q: "Which class of antihypertensives is known for causing a dry, persistent cough?", options: ["Beta Blockers", "Calcium Channel Blockers", "ACE Inhibitors", "Diuretics"], correct: 2 },
                            { q: "A patient on Spironolactone should avoid using:", options: ["Salt substitutes (often contain Potassium)", "Sugar substitutes", "Pepper", "Butter"], correct: 0 },
                            { q: "The therapeutic serum level for Lithium is:", options: ["0.6 - 1.2 mEq/L", "2.0 - 3.5 mEq/L", "10 - 20 mEq/L", "0.1 - 0.5 mEq/L"], correct: 0 },
                            { q: "Which medication is a rescue inhaler for acute asthma attacks?", options: ["Fluticasone (Steroid)", "Salmeterol (Long-acting)", "Albuterol (Short-acting Beta Agonist)", "Montelukast"], correct: 2 },
                            { q: "Omeprazole (Prilosec) is classified as a:", options: ["H2 Blocker", "Antacid", "Proton Pump Inhibitor (PPI)", "Antibiotic"], correct: 2 },
                            { q: "When administering Insulin Lispro (Humalog), when should the patient eat?", options: ["Within 15 minutes", "In 1 hour", "In 2 hours", "Whenever they want"], correct: 0 },
                            { q: "Which antidote is used for Heparin overdose?", options: ["Vitamin K", "Protamine Sulfate", "Naloxone", "Flumazenil"], correct: 1 },
                            { q: "Serotonin Syndrome is a potential risk when combining SSRIs with:", options: ["MAOIs", "NSAIDs", "Antibiotics", "Antihistamines"], correct: 0 },
                            { q: "Which Beta Blocker is non-selective and should be used with caution in asthmatics?", options: ["Metoprolol", "Atenolol", "Propranolol", "Bisoprolol"], correct: 2 },
                            { q: "What is the primary indication for Adenosine?", options: ["Bradycardia", "Supraventricular Tachycardia (SVT)", "Hypertension", "Pain"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 20211, code: "NUR 211", title: "Paediatrics Nursing II", icon: "ph-baby-carriage", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Congenital Heart Defects',
                        body: `
                            <h3>Structural Anomalies</h3>
                            <p><strong>Acyanotic (L-R Shunt):</strong> VSD, PDA, ASD. Increased pulmonary blood flow.</p>
                            <p><strong>Cyanotic (R-L Shunt):</strong> Tetralogy, Transposition. Decreased pulmonary flow.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Tetralogy of Fallot</h4>
                                <img src="assets/tetralogy_of_fallot.png" alt="Tetralogy of Fallot Heart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: PROVer drop (Pulmonary stenosis, RV hypertrophy, Overriding aorta, VSD).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Pediatric Assessment',
                        body: `
                            <h3>Vital Signs & Norms</h3>
                            <p>Children are not little adults. Vitals change with age.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Pediatric Vital Signs</h4>
                                <img src="assets/pediatric_vitals.png" alt="Vitals Chart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Normal ranges for HR, RR, and BP by age group.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Fluid & Electrolytes',
                        body: `
                            <h3>Dehydration</h3>
                            <p>Children have higher body water %. Dehydration is a rapid killer.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Signs of Dehydration</h4>
                                <img src="assets/pediatric_dehydration.png" alt="Dehydration Signs" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Sunken fontanelle, dry mucous membranes, no tears.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Respiratory Illness',
                        body: `
                            <h3>Airway Issues</h3>
                            <p><strong>Croup:</strong> Barking seal cough. Steeple sign.</p>
                            <p><strong>Epiglottitis:</strong> Emergency! Drooling, Dysphagia, Distress. Tripod position. DO NOT examine throat.</p>
                            <p><strong>RSV (Bronchiolitis):</strong> Contact precautions. Mucus plugging.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Gastrointestinal Disorders',
                        body: `
                            <h3>Digestive Health</h3>
                            <p><strong>Pyloric Stenosis:</strong> Projectile vomiting. Olive-shaped mass.</p>
                            <p><strong>Intussusception:</strong> Telescoping bowel. Currant jelly stool. Sausage-shaped mass.</p>
                            <p><strong>Hirschsprung's:</strong> Ribbon-like stool (Megacolon). No meconium in 24h.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Pediatric Oncology',
                        body: `
                            <h3>Childhood Cancer</h3>
                            <p><strong>Leukemia (ALL):</strong> Most common. Bone pain, bruising, fever.</p>
                            <p><strong>Wilms Tumor (Nephroblastoma):</strong> Kidney tumor. DO NOT palpate abdomen (can rupture).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Neurological Disorders',
                        body: `
                            <h3>Neuro Development</h3>
                            <p><strong>Hydrocephalus:</strong> Setting sun eyes, increased head circumference. VP Shunt.</p>
                            <p><strong>Cerebral Palsy:</strong> Motor impairment. Spasticity.</p>
                            <p><strong>Spina Bifida:</strong> Neural tube defect. Protect sac (Myelomeningocele).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Infectious Diseases',
                        body: `
                            <h3>Communicable Diseases</h3>
                            <p><strong>Chickenpox (Varicella):</strong> Airborne. Vesicular rash.</p>
                            <p><strong>Measles (Rubeola):</strong> Koplik spots. Airborne.</p>
                            <p><strong>Mumps:</strong> Parotitis. Orchitis risk.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Musculoskeletal',
                        body: `
                            <h3>Bones & Joints</h3>
                            <p><strong>Duchenne MD:</strong> Gower's sign (using hands to stand). X-linked recessive.</p>
                            <p><strong>Scoliosis:</strong> Lateral curvature. Brace (Boston) or Surgery (Harrington rods).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Child Abuse (NAT)',
                        body: `
                            <h3>Non-Accidental Trauma</h3>
                            <p><strong>Red Flags:</strong> Spiral fractures, mismatched history/injury, burns in glove/stocking pattern, Shaken Baby Syndrome (Retinal hemorrhages).</p>
                            <p><strong>Duty to Report:</strong> Nurses are mandatory reporters.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Paediatrics II Quiz',
                        questions: [
                            { q: "What is the classic sign of Pyloric Stenosis?", options: ["Currant Jelly Stool", "Projectile Vomiting", "Ribbon-like Stool", "Steatorrhea"], correct: 1 },
                            { q: "Which congenital heart defect includes a VSD, Pulmonary Stenosis, Overriding Aorta, and RV Hypertrophy?", options: ["ASD", "PDA", "Tetralogy of Fallot", "Transposition of Great Vessels"], correct: 2 },
                            { q: "A child in a tripod position, drooling, and in respiratory distress likely has:", options: ["Croup", "Epiglottitis", "Asthma", "Bronchiolitis"], correct: 1 },
                            { q: "What vital sign trend is expected in a crying infant?", options: ["Bradycardia", "Tachycardia", "Hypotension", "Bradypnea"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Advanced Pediatric Nursing',
                        questions: [
                            { q: "A child with 'currant jelly stools' and a sausage-shaped mass in the abdomen likely has:", options: ["Pyloric Stenosis", "Intussusception", "Appendicitis", "Hirschsprung's Disease"], correct: 1 },
                            { q: "Which of the following is an acyanotic heart defect?", options: ["Tetralogy of Fallot", "Transposition of Great Vessels", "Ventricular Septal Defect (VSD)", "Single Ventricle"], correct: 2 },
                            { q: "The 'Steeple Sign' on an X-ray is indicative of:", options: ["Epiglottitis", "Croup (Laryngotracheobronchitis)", "Pneumonia", "Asthma"], correct: 1 },
                            { q: "In Tetralogy of Fallot, 'squatting' helps a child by:", options: ["Decreasing systemic vascular resistance", "Increasing systemic vascular resistance (forcing blood to lungs)", "Reducing heart rate", "Relieving pain"], correct: 1 },
                            { q: "Wilms Tumor (Nephroblastoma) is a cancer of the:", options: ["Bone", "Brain", "Kidney", "Liver"], correct: 2 },
                            { q: "What is the most critical nursing precaution for a child with a Wilms Tumor?", options: ["Measuring head circumference daily", "Do NOT palpate the abdomen", "Keeping the child NPO", "Isolating the child from others"], correct: 1 },
                            { q: "Duchenne Muscular Dystrophy is characterized by which sign when standing up from the floor?", options: ["Kernig's Sign", "Brudzinski's Sign", "Gower's Sign", "Babinski Sign"], correct: 2 },
                            { q: "Koplik spots in the mouth are a hallmark of:", options: ["Chickenpox", "Mumps", "Measles (Rubeola)", "Rubella"], correct: 2 },
                            { q: "A baby with projectile vomiting and an olive-shaped mass in the epigastrium likely has:", options: ["GERD", "Pyloric Stenosis", "Hernia", "Gastritis"], correct: 1 },
                            { q: "Hydrocephalus is treated with:", options: ["Antibiotics", "Diuretics", "Ventriculoperitoneal (VP) Shunt", "Radiation therapy"], correct: 2 }
                        ]
                    }
                ]
            }
        ],
        year3: [
            {
                id: 30300, code: "NUR 300", title: "Communicable & Vector", icon: "ph-warning", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Principles of Epidemiology',
                        body: `
                            <h3>Disease dynamics</h3>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Epidemiological Triad</h4>
                                <img src="assets/epidemiological_triad.png" alt="Agent Host Environment" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Interaction between Agent (Microbe), Host (Human), and Environment.</p>
                            </div>
                            
                            <p><strong>Incidence vs Prevalence:</strong> New cases vs Total existing cases.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Levels of Prevention',
                        body: `
                            <h3>Public Health Approach</h3>
                            <p><strong>Primordial:</strong> Preventing risk factors (Policy).</p>
                            <p><strong>Primary:</strong> Vaccination, Health Education.</p>
                            <p><strong>Secondary:</strong> Screening (Pap smear, TB Test).</p>
                            <p><strong>Tertiary:</strong> Rehabilitation, preventing complications.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Integrated Disease Surveillance (IDSR)',
                        body: `
                            <h3>Reporting Systems</h3>
                            <p><strong>Immediate Reporting:</strong> Polio (AFP), Cholera, Viral Hemorrhagic Fevers.</p>
                            <p><strong>Weekly Reporting:</strong> Malaria, Dysentery.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Malaria Control',
                        body: `
                            <h3>Vector Management</h3>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Integrated Vector Management</h4>
                                <img src="assets/vector_control.png" alt="Vector Control Methods" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: IRS, Larviciding, ITNs, and Environmental Management.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Tuberculosis (TB)',
                        body: `
                            <h3>Mycobacterium tuberculosis</h3>
                            <p><strong>Transmission:</strong> Airborne.</p>
                            <p><strong>Dx:</strong> GeneXpert (sputum), CXR.</p>
                            <p><strong>Tx (DOTS):</strong> Rifampicin, Isoniazid, Pyrazinamide, Ethambutol (RIPE) for 6 months.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: HIV/AIDS Management',
                        body: `
                            <h3>ART Guidelines</h3>
                            <p><strong>Test and Treat:</strong> Start ART immediately upon confirmation.</p>
                            <p><strong>Regimen:</strong> TDF + 3TC + DTG (TLD) as first line.</p>
                            <p><strong>PMTCT:</strong> Prevention of Mother to Child Transmission.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Viral Hemorrhagic Fevers',
                        body: `
                            <h3>Ebola & Marburg</h3>
                            <p><strong>Transmission:</strong> Contact with body fluids. High mortality.</p>
                            <p><strong>IPC:</strong> Full PPE, Safe Burial (SDB).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Cholera & Dysentery',
                        body: `
                            <h3>Enteric Diseases</h3>
                            <p><strong>Cholera:</strong> Rice-water stool. Severe dehydration.</p>
                            <p><strong>Dysentery (Shigella):</strong> Bloody diarrhea + Fever.</p>
                            <p><strong>Control:</strong> WASH (Water, Sanitation, Hygiene).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Neglected Tropical Diseases (NTDs)',
                        body: `
                            <h3>Community Treatment</h3>
                            <p><strong>Schistosomiasis:</strong> Praziquantel.</p>
                            <p><strong>Soil Transmitted Helminths:</strong> Albendazole.</p>
                            <p><strong>Strategy:</strong> Mass Drug Administration (MDA).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: One Health Approach',
                        body: `
                            <h3>Interconnected Health</h3>
                            <p>Collaboration between Human, Animal, and Environmental health sectors to prevent Zoonoses (Rabies, Anthrax).</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Communicable Diseases Quiz',
                        questions: [
                            { q: "Which level of prevention involves screening for diseases like TB?", options: ["Primordial", "Primary", "Secondary", "Tertiary"], correct: 2 },
                            { q: "What is the first-line treatment regimen for HIV (Adults)?", options: ["AZT + 3TC + NVP", "TDF + 3TC + DTG", "ABC + 3TC + EFV", "TDF + FTC + ATV"], correct: 1 },
                            { q: "The 'Rice-water stool' is pathognomonic for:", options: ["Typhoid", "Dysentery", "Cholera", "Giardiasis"], correct: 2 },
                            { q: "DOTS is the strategy used for the management of:", options: ["Malaria", "HIV", "Tuberculosis", "Leprosy"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Communicable Diseases Review',
                        questions: [
                            { q: "The 'Rice Water Stool' is a hallmark sign of which disease?", options: ["Typhoid", "Cholera", "Dysentery", "Amoebiasis"], correct: 1 },
                            { q: "Which vector is responsible for transmitting Dengue Fever?", options: ["Anopheles", "Culex", "Aedes aegypti", "Tsetse Fly"], correct: 2 },
                            { q: "The Mantoux test is used to screen for:", options: ["HIV", "Tuberculosis", "Leprosy", "Syphilis"], correct: 1 },
                            { q: "Koplik's spots are pathognomonic for:", options: ["Rubella", "Measles (Rubeola)", "Chickenpox", "Mumps"], correct: 1 },
                            { q: "Which of the following is a sexually transmitted infection caused by a bacteria?", options: ["Herpes", "Syphilis", "HIV", "Hepatitis B"], correct: 1 },
                            { q: "The 'integrated disease surveillance and response' (IDSR) strategy aims to:", options: ["Treat all patients", "Detect and respond to disease outbreaks", "Provide vaccinations", "Educate the public"], correct: 1 },
                            { q: "Neglected Tropical Diseases (NTDs) primarily affect:", options: ["Wealthy nations", "Urban populations", "Poor/marginalized populations", "Cold climates"], correct: 2 },
                            { q: "Which of the following is NOT part of the Epidemiological Triad?", options: ["Host", "Agent", "Environment", "Treatment"], correct: 3 },
                            { q: "Rabies is most commonly transmitted through:", options: ["Mosquito bites", "Contaminated water", "Animal bites/saliva", "Airborne droplets"], correct: 2 },
                            { q: "The incubation period is the time between:", options: ["Exposure and onset of symptoms", "Symptoms and recovery", "Diagnosis and treatment", "Exposure and death"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 30301, code: "NUR 301", title: "Community Health Nursing II", icon: "ph-users", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: The Home Visit',
                        body: `
                            <h3>Bag Technique</h3>
                            <p>Standard procedure to prevent cross-contamination during home care.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">CHN Bag Layout</h4>
                                <img src="assets/chn_bag_technique.png" alt="CHN Bag Technique" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Clean to Dirty area organization. Bag placed on paper lining.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Family Health Nursing',
                        body: `
                            <h3>The Family as Client</h3>
                            <p> Assessing family structure (Genogram) and function (APGAR).</p>
                            <p><strong>Goals:</strong> Empower family independence in health maintenance.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: School Health Program',
                        body: `
                            <h3>Health in Schools</h3>
                            <p><strong>Activities:</strong> Health screening (Vision/Hearing), Deworming, Nutrition (Feeding programs), WASH in schools.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Occupational Health',
                        body: `
                            <h3>Workplace Safety</h3>
                            <p><strong>Hazards:</strong> Physical (Noise), Chemical (Lead), Biological, Psychosocial.</p>
                            <p><strong>Ergonomics:</strong> Fitting the job to the worker.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Environmental Health',
                        body: `
                            <h3>Sanitation & Hygiene</h3>
                            <p><strong>Safe Water:</strong> Boiling, Chlorination, Solar disinfection (SODIS).</p>
                            <p><strong>Waste Disposal:</strong> Latrines (VIP), Incineration, Composting.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Maternal & Child Health (Community)',
                        body: `
                            <h3>MCH at Grassroots</h3>
                            <p><strong>Community Midwifery:</strong> Antenatal care referrals, Skilled Birth Attendance promotion.</p>
                            <p><strong>Growth Monitoring:</strong> Under-5 clinic (The Road to Health chart).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Disaster Nursing',
                        body: `
                            <h3>Emergency Response</h3>
                            <p><strong>Triage:</strong> START method (Simple Triage and Rapid Treatment). Red, Yellow, Green, Black tags.</p>
                            <p><strong>Phases:</strong> Mitigation, Preparedness, Response, Recovery.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Health Education',
                        body: `
                            <h3>IEC Materials</h3>
                            <p>Information, Education, Communication.</p>
                            <p><strong>Methods:</strong> Baraza, Focus Group Discussion (FGD), Posters, Demonstrations.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Principles of Prevention',
                        body: `
                            <h3>Levels of Prevention</h3>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Prevention Strategy</h4>
                                <img src="assets/levels_of_prevention.png" alt="Levels of Prevention" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 9.1: Primary (Vaccine), Secondary (Screening), Tertiary (Rehab).</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Community Diagnosis',
                        body: `
                            <h3>Assessing the Community</h3>
                            <p><strong>Steps:</strong> Scoping, Data Collection, Analysis, Prioritization, Action Plan.</p>
                            <p><strong>Tools:</strong> Windshield survey, Key Informant Interviews.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Community Health Quiz',
                        questions: [
                            { q: "What is the primary purpose of the 'Bag Technique'?", options: ["To carry medicines", "To prevent cross-contamination", "To look professional", "To store personal items"], correct: 1 },
                            { q: "In Disaster Triage, a 'Black Tag' indicates:", options: ["Immediate care needed", "Minor injuries", "Deceased or expectorant", "Delayed care"], correct: 2 },
                            { q: "Which of these is a Primary Prevention activity?", options: ["Treating Pneumonia", "TB Screening", "Immunization", "Physical Therapy"], correct: 2 },
                            { q: "Fitting the job/workstation to the worker to prevent injury is called:", options: ["Industrial Hygiene", "Ergonomics", "Psychosocial Support", "Occupational Therapy"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Advanced Community Health',
                        questions: [
                            { q: "Which screening tool is used to assess family structure and relationships?", options: ["Genogram", "Ecomap", "APGAR", "Growth Chart"], correct: 0 },
                            { q: "During a home visit, the bag should be placed on:", options: ["The patient's bed", "The floor", "A clean newspaper/lining producing a sterile field", "The table without a lining"], correct: 2 },
                            { q: "The 'START' method in disaster triage stands for:", options: ["Simple Triage and Rapid Transport", "Simple Triage and Rapid Treatment", "Standard Therapy and Rapid Transport", "Save The Active Rescue Team"], correct: 1 },
                            { q: "Solar Disinfection (SODIS) relies on which element to purify water?", options: ["Chemicals", "UV radiation from the sun", "Boiling heat", "Filtration"], correct: 1 },
                            { q: "The 'Road to Health' chart is primarily used for:", options: ["Geriatric assessments", "Maternal tracking", "Under-5 Growth Monitoring", "Communicable disease tracking"], correct: 2 },
                            { q: "Which color tag in triage signifies 'Walking Wounded'?", options: ["Red", "Yellow", "Green", "Black"], correct: 2 },
                            { q: "A 'Baraza' is a form of:", options: ["Medical treatment", "Community health education/meeting", "Surgical instrument", "Vaccination site"], correct: 1 },
                            { q: "Ventilated Improved Pit (VIP) latrines reduce smells primarily through:", options: ["Chemicals", "A vent pipe", "Regular emptying", "Deep pits"], correct: 1 },
                            { q: "In Occupational Health, fitting the worker to the job is NOT the goal. The goal is:", options: ["Firing the worker", "Fitting the job to the worker (Ergonomics)", "Ignoring the hazard", "Using more PPE"], correct: 1 },
                            { q: "Community Diagnosis involves:", options: ["Diagnosing individuals", "Assessing the health status of a population", "Guessing health problems", "Hospital-based care"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 30302, code: "NUR 302", title: "Medsurg 3", icon: "ph-first-aid-kit", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Emergency Nursing',
                        body: `
                            <h3>Trauma & Resuscitation</h3>
                            <p><strong>Primary Survey (ABCDE):</strong> Airway, Breathing, Circulation, Disability, Exposure.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">BLS/ACLS Algorithm</h4>
                                <img src="assets/cpr_algorithm.png" alt="CPR Algorithm" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: High-quality CPR, early Defibrillation.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Critical Care (ICU)',
                        body: `
                            <h3>Advanced Monitoring</h3>
                            <p><strong>CVP:</strong> Central Venous Pressure (Fluid status).</p>
                            <p><strong>Ventilators:</strong> Modes (SIMV, AC, CPAP). Prevent VAP (Ventilator Associated Pneumonia).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Neurological Trauma',
                        body: `
                            <h3>TBI Management</h3>
                            <p><strong>Assessment:</strong> Level of Consciousness is the most sensitive indicator.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Glasgow Coma Scale (GCS)</h4>
                                <img src="assets/glasgow_coma_scale.png" alt="GCS Chart" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Eye (4), Verbal (5), Motor (6). Max 15, Min 3.</p>
                            </div>
                            
                            <p><strong>ICP:</strong> Increased Intracranial Pressure. Cushing's Triad (HTN, Bradycardia, Irregular respirations).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Perioperative Nursing',
                        body: `
                            <h3>Surgery Phases</h3>
                            <p><strong>Pre-op:</strong> Informed consent (Surgeon's job, Nurse witnesses), NPO status.</p>
                            <p><strong>Intra-op:</strong> Time Out (Right Patient, Right Site, Right Procedure). Sterile technique.</p>
                            <p><strong>Post-op:</strong> PACU. Airway is priority. Malignant Hyperthermia risk (Dantrolene).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Eye, Ear, Nose, Throat (EENT)',
                        body: `
                            <h3>Sensory Disorders</h3>
                            <p><strong>Glaucoma:</strong> Increased IOP. Peripheral vision loss. "Tunnel vision".</p>
                            <p><strong>Cataracts:</strong> Clouding of lens. Blurry vision.</p>
                            <p><strong>Meniere's Disease:</strong> Vertigo, Tinnitus, Hearing loss.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Shock',
                        body: `
                            <h3>Circulatory Failure</h3>
                            <p><strong>Hypovolemic:</strong> Fluid loss. Tachycardia, Hypotension.</p>
                            <p><strong>Septic:</strong> Infection. Vasodilation.</p>
                            <p><strong>Anaphylactic:</strong> Allergic reaction. Epinephrine.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Burns',
                        body: `
                            <h3>Thermal Injury</h3>
                            <p><strong>Parkland Formula:</strong> 4mL x kg x %TBSA. Give 50% in first 8 hours.</p>
                            <p><strong>Rule of Nines:</strong> Estimation of burn area.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Orthopedics',
                        body: `
                            <h3>Musculoskeletal Trauma</h3>
                            <p><strong>Fractures:</strong> Immobilize. Neurovascular checks (6 Ps).</p>
                            <p><strong>Compartment Syndrome:</strong> Pain out of proportion. Fasciotomy.</p>
                            <p><strong>Traction:</strong> Weights must hang freely.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Oncology Nursing',
                        body: `
                            <h3>Cancer Care</h3>
                            <p><strong>Chemotherapy:</strong> Vesicants (Extravasation risk). Neutropenic precautions.</p>
                            <p><strong>Radiation:</strong> Skin care (No lotions/powders). Distance/Time/Shielding.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Disaster Management',
                        body: `
                            <h3>Mass Casualty</h3>
                            <p><strong>Role:</strong> Triage officer. Resource allocation.</p>
                            <p><strong>Black Tag:</strong> Agonal breathing, no pulse, open brain injury.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'MedSurg III Quiz',
                        questions: [
                            { q: "What is the priority intervention for a patient with signs of Compartment Syndrome?", options: ["Elevate limb", "Apply ice", "Notify provider", "Give analgesics"], correct: 2 },
                            { q: "Which GCS score indicates a Coma?", options: ["15", "12", "8 or less", "10"], correct: 2 },
                            { q: "The 'Time Out' procedure is performed to prevent:", options: ["Infection", "Wrong Site Surgery", "Anesthesia complications", "Bleeding"], correct: 1 },
                            { q: "In the Parkland formula, how much fluid is given in the first 8 hours?", options: ["25%", "33%", "50%", "100%"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Critical & Emergency Care',
                        questions: [
                            { q: "The 'C' in the ABCDE primary survey stands for:", options: ["Consciousness", "Circulation", "Cardio", "Communication"], correct: 1 },
                            { q: "Cushing's Triad (Bradycardia, Hypertension, Irregular Respirations) is a sign of:", options: ["Shock", "Increased Intracranial Pressure (ICP)", "Meningitis", "Hypovolemia"], correct: 1 },
                            { q: "Which medication is the treatment of choice for Malignant Hyperthermia?", options: ["Dantrolene", "Atropine", "Succinylcholine", "Lidocaine"], correct: 0 },
                            { q: "Tunnel vision (loss of peripheral vision) is a classic symptom of:", options: ["Cataracts", "Macular Degeneration", "Glaucoma", "Retinal Detachment"], correct: 2 },
                            { q: "The Parkland Formula for burn resuscitation is:", options: ["2 mL x kg x %TBSA", "4 mL x kg x %TBSA", "6 mL x kg x %TBSA", "1 mL x kg x %TBSA"], correct: 1 },
                            { q: "In compartment syndrome, pain is typically described as:", options: ["Mild and aching", "Proportionate to the injury", "Out of proportion to the injury and unrelieved by meds", "Sharp and shooting"], correct: 2 },
                            { q: "Which type of shock is characterized by massive vasodilation due to infection?", options: ["Hypovolemic", "Cardiogenic", "Septic", "Neurogenic"], correct: 2 },
                            { q: "Chemotherapy extravasation requires:", options: ["Applying heat", "Applying pressure", "Stopping the infusion immediately", "Run it slower"], correct: 2 },
                            { q: "The 'Time Out' procedure in surgery is designed to prevent:", options: ["Anesthesia complications", "Wrong site/Wrong patient surgery", "Infection", "Bleeding"], correct: 1 },
                            { q: "A Glasgow Coma Scale (GCS) score of 8 or less indicates:", options: ["Mild injury", "Moderate injury", "Severe injury (Coma)", "Normal function"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 30303, code: "NUR 303", title: "Midwifery I", icon: "ph-gender-female", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Anatomy of Reproduction',
                        body: `
                            <h3>Female Pelvis</h3>
                            <p><strong>Gynecoid:</strong> Most favorable for birth.</p>
                            <p><strong>Android:</strong> Male-type, heart-shaped. Poor prognosis.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Fetal Development',
                        body: `
                            <h3>Life in Utero</h3>
                            <p><strong>Placenta:</strong> Gas/Nutrient exchange. Produces HCG, Progesterone.</p>
                            <p><strong>Circulation:</strong> 2 Arteries (Deoxygenated), 1 Vein (Oxygenated). "AVA".</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Signs of Pregnancy',
                        body: `
                            <h3>Diagnosis</h3>
                            <p><strong>Presumptive (Subjective):</strong> Nausea, Amenorrhea.</p>
                            <p><strong>Probable (Objective):</strong> Positive HCG test, Chadwick's sign (Blue cervix).</p>
                            <p><strong>Positive (Diagnostic):</strong> Fetal Heart Rate, Ultrasound, Fetal movement felt by examiner.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Antenatal Care',
                        body: `
                            <h3>Assessment</h3>
                            <p><strong>Naegele's Rule:</strong> LMP + 7 days - 3 months.</p>
                            <p><strong>Fundal Height:</strong> Matches gestational weeks (20-36 weeks).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Leopold's Maneuvers</h4>
                                <img src="assets/leopold_maneuvers.png" alt="Leopold's Maneuvers" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 4.1: Determining fetal position and presentation.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Physiological Changes',
                        body: `
                            <h3>Maternal Adaptations</h3>
                            <p><strong>CV:</strong> Blood volume increases 40-50%. Physiological anemia.</p>
                            <p><strong>Resp:</strong> Diaphragm elevated. Dyspnea common.</p>
                            <p><strong>Renal:</strong> GFR increases. Urinary frequency.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Stages of Labor',
                        body: `
                            <h3>The Birth Process</h3>
                            <p><strong>Stage 1:</strong> Dilation (0-10cm). Phases: Latent, Active, Transition.</p>
                            <p><strong>Stage 2:</strong> Pushing (10cm to birth).</p>
                            <p><strong>Stage 3:</strong> Placental delivery.</p>
                            <p><strong>Stage 4:</strong> Recovery (2-4 hours).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Mechanism of Labor',
                        body: `
                            <h3>Cardinal Movements</h3>
                            <p>Engagement -> Descent -> Flexion -> Internal Rotation -> Extension -> External Rotation -> Expulsion.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Fetal Station</h4>
                                <img src="assets/fetal_station.png" alt="Fetal Station Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 7.1: Zero station at Ischial Spines.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Fetal Monitoring',
                        body: `
                            <h3>FHR Patterns</h3>
                            <p><strong>Accelerations:</strong> Good (Oxygenated).</p>
                            <p><strong>Early Decels:</strong> Head compression (OK).</p>
                            <p><strong>Variable Decels:</strong> Cord compression (Move mom).</p>
                            <p><strong>Late Decels:</strong> Placental insufficiency (Bad! LION protocol).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Complications of Pregnancy',
                        body: `
                            <h3>High Risk</h3>
                            <p><strong>Preeclampsia:</strong> HTN + Proteinuria. Seizure prophylaxis: Magnesium Sulfate.</p>
                            <p><strong>Placenta Previa:</strong> Painless bright red bleeding. No vaginal exams!</p>
                            <p><strong>Placenta Abruption:</strong> Painful dark red bleeding. Board-like abdomen.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Pharmacology in OB',
                        body: `
                            <h3>Meds</h3>
                            <p><strong>Pitocin (Oxytocin):</strong> Induces labor/controls bleeding.</p>
                            <p><strong>Terbutaline:</strong> Tocolytic (Stops labor).</p>
                            <p><strong>RhoGAM:</strong> For Rh negative moms.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Midwifery I Quiz',
                        questions: [
                            { q: "Which FHR pattern indicates cord compression?", options: ["Early Deceleration", "Late Deceleration", "Variable Deceleration", "Acceleration"], correct: 2 },
                            { q: "Zero station means the fetal head is at the level of the:", options: ["Ischial Tuberosities", "Ischial Spines", "Pelvic Inlet", "Perineum"], correct: 1 },
                            { q: "Magnesium Sulfate is used in Preeclampsia to prevent:", options: ["Hypertension", "Seizures", "Labor", "Bleeding"], correct: 1 },
                            { q: "Painless bright red vaginal bleeding in late pregnancy suggests:", options: ["Placenta Abruption", "Placenta Previa", "Uterine Rupture", "Labor"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Midwifery I Review',
                        questions: [
                            { q: "Which pelvic shape is considered most favorable for vaginal delivery?", options: ["Android", "Anthropoid", "Gynecoid", "Platypelloid"], correct: 2 },
                            { q: "The umbilical cord normally contains:", options: ["2 Veins and 1 Artery", "2 Arteries and 1 Vein", "1 Artery and 1 Vein", "2 Arteries and 2 Veins"], correct: 1 },
                            { q: "Naegele's Rule for estimating the due date is:", options: ["LMP + 7 days - 3 months", "LMP + 9 months", "LMP - 7 days + 3 months", "LMP + 14 days"], correct: 0 },
                            { q: "Positive signs of pregnancy (diagnostic) include:", options: ["Morning sickness", "Positive urine test", "Fetal Heart Tones heard by examiner", "Quickening"], correct: 2 },
                            { q: "Supine Hypotensive Syndrome is caused by:", options: ["High blood pressure", "Compression of the Vena Cava by the uterus", "Dehydration", "Anemia"], correct: 1 },
                            { q: "During Labor, the 'Transition Phase' is characterized by dilation from:", options: ["0-3 cm", "4-7 cm", "8-10 cm", "complete"], correct: 2 },
                            { q: "Late Decelerations on a fetal monitor indicate:", options: ["Head Compression", "Cord Compression", "Placental Insufficiency", "Normal finding"], correct: 2 },
                            { q: "RhoGAM is administered to:", options: ["Rh Positive moms", "Rh Negative moms carrying Rh Positive fetus", "All moms", "The baby"], correct: 1 },
                            { q: "Which Lochia is expected 1-3 days postpartum?", options: ["Lochia Serosa (Pink)", "Lochia Alba (White)", "Lochia Rubra (Red)", "No Lochia"], correct: 2 },
                            { q: "The fundus should be at which level immediately after birth?", options: ["At the umbilicus", "3 cm above umbilicus", "Symphysis pubis", "Xyphoid process"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 30304, code: "NUR 304", title: "Human Pathology", icon: "ph-skull", completed: false,
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Cellular Injury',
                        body: `
                            <h3>Adaptation & Death</h3>
                            <p><strong>Reversible:</strong> Swelling (Hydropic changes), Fatty change.</p>
                            <p><strong>Irreversible:</strong> Membrane damage, Nuclear fragmentation (Karyorrhexis, Karyolysis).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cell Injury Spectrum</h4>
                                <img src="assets/cell_injury_reversible_irreversible.png" alt="Cell Injury Diagram" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 1.1: Point of no return involving mitochondrial dysfunction.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Inflammation',
                        body: `
                            <h3>The Body's Defense</h3>
                            <p><strong>Acute:</strong> Neutrophils. Vascular leakage.</p>
                            <p><strong>Chronic:</strong> Lymphocytes, Macrophages. Fibrosis.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Cardinal Signs</h4>
                                <img src="assets/inflammation_cardinal_signs.png" alt="Cardinal Signs of Inflammation" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 2.1: Rubor, Calor, Tumor, Dolor, Functio Laesa.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Tissue Repair & Healing',
                        body: `
                            <h3>Regeneration vs Repair</h3>
                            <p><strong>Primary Intention:</strong> Clean incision, minimal scar.</p>
                            <p><strong>Secondary Intention:</strong> Open wound, granulation tissue.</p>
                            <p><strong>Keloid:</strong> Hypertrophic scar tissue (collagen overgrowth).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Hemodynamic Disorders',
                        body: `
                            <h3>Fluid & Blood Flow</h3>
                            <p><strong>Edema:</strong> Increased Hydrostatic pressure or Decreased Oncotic pressure.</p>
                            <p><strong>Thrombus:</strong> Virchow's Triad (Stasis, hypercoagulability, vessel wall injury).</p>
                            <p><strong>Embolus:</strong> Detached mass (clot, fat, air) carried by blood.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Neoplasia',
                        body: `
                            <h3>Tumor Biology</h3>
                            <p><strong>Benign:</strong> Encapsulated, well-differentiated, no metastasis.</p>
                            <p><strong>Malignant:</strong> Invasive, poorly differentiated (anaplasia), metastasis.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Benign vs Malignant</h4>
                                <img src="assets/neoplasia_benign_malignant.png" alt="Benign vs Malignant Tumor" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 5.1: Comparison of growth patterns and capsule.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Necrosis',
                        body: `
                            <h3>Cell Death Types</h3>
                            <p><strong>Coagulative:</strong> Ischemia (Heart/Kidney). Ghost cells.</p>
                            <p><strong>Liquefactive:</strong> Bacterial infection/Brain infarct. Pus.</p>
                            <p><strong>Caseous:</strong> "Cheese-like" (TB/Fungus).</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">Types of Necrosis</h4>
                                <img src="assets/necrosis_types_comparison.png" alt="Necrosis Types" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 6.1: Histological appearance.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Genetic Disorders',
                        body: `
                            <h3>Inheritance Patterns</h3>
                            <p><strong>Autosomal Dominant:</strong> Marfan's, Huntington's.</p>
                            <p><strong>Autosomal Recessive:</strong> Cystic Fibrosis, Sickle Cell.</p>
                            <p><strong>X-Linked:</strong> Hemophilia, Color blindness.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Environmental Pathology',
                        body: `
                            <h3>External Factors</h3>
                            <p><strong>Lead Poisoning:</strong> Basophilic stippling, developmental delay.</p>
                            <p><strong>Carbon Monoxide:</strong> Cherry red skin. Binds Hemoglobin > O2.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Immunopathology',
                        body: `
                            <h3>Immune System dysfunctions</h3>
                            <p><strong>Type I Hypersensitivity:</strong> Anaphylaxis (IgE).</p>
                            <p><strong>Type II:</strong> Cytotoxic (Transfusion reaction).</p>
                            <p><strong>Type III:</strong> Immune Complex (Lupus).</p>
                            <p><strong>Type IV:</strong> Delayed (TB Skin test).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Nutritional Pathology',
                        body: `
                            <h3>Deficiencies</h3>
                            <p><strong>Vitamin C:</strong> Scurvy (bleeding gums).</p>
                            <p><strong>Vitamin D:</strong> Rickets (bone deformity).</p>
                            <p><strong>Vitamin B12:</strong> Pernicious Anemia.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Pathology Quiz',
                        questions: [
                            { q: "Which type of necrosis is characteristic of Tuberculosis?", options: ["Coagulative", "Liquefactive", "Caseous", "Fat"], correct: 2 },
                            { q: "Virchow's Triad describes risk factors for:", options: ["Inflammation", "Thrombosis", "Neoplasia", "Hemorrhage"], correct: 1 },
                            { q: "Which is a cardinal sign of inflammation?", options: ["Pallor", "Cyanosis", "Rubor", "Jaundice"], correct: 2 },
                            { q: "Hypertrophic scar tissue extending beyond the wound boundary is called a:", options: ["Keloid", "Granuloma", "Abscess", "Ulcer"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: General Pathology Review',
                        questions: [
                            { q: "Which type of cellular adaptation involves an increase in the size of cells?", options: ["Hyperplasia", "Hypertrophy", "Atrophy", "Metaplasia"], correct: 1 },
                            { q: "Programmed cell death is known as:", options: ["Necrosis", "Apoptosis", "Autolysis", "Gangrene"], correct: 1 },
                            { q: "Virchow's Triad includes endothelial injury, abnormal blood flow, and:", options: ["Hypercoagulability", "Hypotension", "Anemia", "Thrombocytopenia"], correct: 0 },
                            { q: "Which vitamin deficiency causes Scurvy (bleeding gums/poor healing)?", options: ["Vitamin D", "Vitamin B12", "Vitamin C", "Vitamin A"], correct: 2 },
                            { q: "An embolus is best defined as:", options: ["A stationary blood clot", "A detached mass carried by blood to a distant site", "A hardening of the arteries", "A tumor"], correct: 1 },
                            { q: "Which Hypersensitivity reaction is mediated by IgE (allergic/anaphylaxis)?", options: ["Type I", "Type II", "Type III", "Type IV"], correct: 0 },
                            { q: "The term 'Metaplasia' refers to:", options: ["Uncontrolled cell growth", "Reversible replacement of one adult cell type by another", "Decrease in cell size", "Cell death"], correct: 1 },
                            { q: "Carbon Monoxide poisoning causes the skin to turn:", options: ["Blue (Cyanotic)", "Pale", "Cherry Red", "Yellow (Jaundice)"], correct: 2 },
                            { q: "Coagulative Necrosis is most commonly associated with:", options: ["Brain infarction", "Tuberculosis", "Ischemia in solid organs (Heart/Kidney)", "Pancreatitis"], correct: 2 },
                            { q: "Malignant tumors are characterized by:", options: ["Encapsulation", "Slow growth", "Invasion and Metastasis", "Well-differentiated cells"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 30306,
                code: "NUR 306",
                title: "Midwifery II",
                icon: "ph-baby",
                completed: false,
                description: "Comprehensive management of high-risk labor, delivery complications, and obstetric emergencies.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Dystocia (Prolonged Labor)',
                        body: `
                            <h3>Defining Dystocia</h3>
                            <p>Dystocia refers to difficult or abnormal labor progress. It is often related to the "5 Ps" of labor, but primarily the first three.</p>
                            
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The 3 P's of Dystocia</h4>
                                <ul>
                                    <li><strong>Powers:</strong> Uterine contractions are too weak (hypotonic) or uncoordinated (hypertonic).</li>
                                    <li><strong>Passenger:</strong> Fetus is too large (macrosomia) or in a bad position (OP).</li>
                                    <li><strong>Passage:</strong> The maternal pelvis is too small (Cephalopelvic Disproportion - CPD).</li>
                                </ul>
                            </div>

                            <h4>Management</h4>
                            <p>Interventions may include augmentation with Oxytocin, rupture of membranes (AROM), or position changes. Operative delivery is considered if distress occurs.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Malpresentations',
                        body: `
                            <h3>Non-Vertex Presentations</h3>
                            <p>Normal presentation is Cephalic (Vertex/Occiput). Deviation increases risk.</p>

                            <h4>Breech Presentation</h4>
                            <p>Buttocks or feet present first. Types: Frank, Complete, Footling.</p>
                            <p><strong>Risks:</strong> Cord prolapse, head entrapment.</p>
                            <p><strong>Management:</strong> External Cephalic Version (ECV) or C-Section.</p>

                            <h4>Other Malpresentations</h4>
                            <ul>
                                <li><strong>Face/Brow:</strong> Poor flexion of head. Often requires C-Section.</li>
                                <li><strong>Shoulder:</strong> Transverse lie. C-Section mandatory.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Obstetric Hemorrhage',
                        body: `
                            <h3>Postpartum Hemorrhage (PPH)</h3>
                            <p>Defined as blood loss >500ml (Vaginal) or >1000ml (C-Section). It is a top cause of maternal mortality.</p>

                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee; margin: 1.5rem 0;">
                                <h4 style="margin-top:0">The 4 T's of PPH</h4>
                                <img src="assets/pph_4ts.png" alt="4 Ts of Hemorrhage" style="width: 100%; border-radius: 8px; margin-bottom: 0.5rem;">
                                <p style="font-size: 0.9rem; color: #666; font-style: italic;">Figure 3.1: Tone, Trauma, Tissue, Thrombin.</p>
                            </div>

                            <ul>
                                <li><strong>Tone:</strong> Uterine atony (boggy uterus). Massage fundus! Meds: Oxytocin, Methergine, Misoprostol.</li>
                                <li><strong>Trauma:</strong> Lacerations, rupture, inversion.</li>
                                <li><strong>Tissue:</strong> Retained placenta.</li>
                                <li><strong>Thrombin:</strong> Coagulopathy (DIC, Pre-eclampsia).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Obstetric Emergencies',
                        body: `
                            <h3>Shoulder Dystocia</h3>
                            <p>Head is born but anterior shoulder gets stuck behind pubic bone. "Turtle Sign".</p>
                            <p><strong>ALARMER Protocol:</strong> McRoberts maneuver (legs flexed to chest) and Suprapubic pressure. Never apply fundal pressure!</p>

                            <h3>Umbilical Cord Prolapse</h3>
                            <p>Cord slips ahead of the presenting part, causing compression and hypoxia.</p>
                            <p><strong>Intervention:</strong> Glove hand to lift head off cord, knee-chest position, emergency C-section.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Induction of Labor',
                        body: `
                            <h3>Stimulating Contractions</h3>
                            <p>Indications: Post-term >42 weeks, Pre-eclampsia, PROM.</p>

                            <h4>Bishop Score</h4>
                            <p>Assesses cervical readiness (Dilation, Effacement, Station, Consistency, Position). Score >8 indicates successful induction.</p>

                            <h4>Methods</h4>
                            <ul>
                                <li><strong>Cervical Ripening:</strong> Prostaglandins (Cervidil/Cytotec).</li>
                                <li><strong>Mechanical:</strong> Foley balloon.</li>
                                <li><strong>Pharmacological:</strong> Oxytocin (Pitocin) IV titration.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Operative Deliveries',
                        body: `
                            <h3>Assisted Vaginal Delivery</h3>
                            <p>Use of Vacuum (Ventouse) or Forceps to shorten the second stage of labor.</p>
                            <p><strong>Requirements:</strong> Fully dilated, ruptured membranes, engaged head, empty bladder.</p>

                            <h3>Cesarean Section</h3>
                            <p>Surgical delivery via abdominal incision.</p>
                            <ul>
                                <li><strong>Indications:</strong> Placenta previa, distress, breech, repeat C/S.</li>
                                <li><strong>Risks:</strong> Infection, hemorrhage, DVT, organ injury.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Multiple Gestation',
                        body: `
                            <h3>Twins and Higher Order</h3>
                            <p><strong>Monozygotic:</strong> Identical (one egg). Risk of TTTS (Twin-Twin Transfusion Syndrome).</p>
                            <p><strong>Dizygotic:</strong> Fraternal (two eggs).</p>

                            <h4>Complications</h4>
                            <p>Preterm labor, Preeclampsia, PPH, IUGR (Growth restriction).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Amniotic Fluid Complications',
                        body: `
                            <h3>Volume Disorders</h3>
                            <p><strong>Polyhydramnios:</strong> Too much fluid (>2000ml). Risk of cord prolapse, PPH. Associated with GI anomalies/Diabetes.</p>
                            <p><strong>Oligohydramnios:</strong> Too little fluid (<500ml). Risk of cord compression, renal agenesis (Potter's).</p>

                            <h3>Amniotic Fluid Embolism (AFE)</h3>
                            <p>Anaphylactoid syndrome where fluid enters maternal circulation. Sudden collapse, hypoxia, coagulopathy.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Perineal Trauma',
                        body: `
                            <h3>Lacerations and Episiotomy</h3>
                            <p><strong>Degrees of Tears:</strong></p>
                            <ul>
                                <li><strong>1st:</strong> Skin/Mucosa only.</li>
                                <li><strong>2nd:</strong> Muscles of perineal body.</li>
                                <li><strong>3rd:</strong> Anal sphincter.</li>
                                <li><strong>4th:</strong> Rectal mucosa involved.</li>
                            </ul>

                            <p><strong>Care:</strong> Ice packs (first 24h), Sitz baths, Stool softeners, Infection prevention.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Preterm Labor',
                        body: `
                            <h3>Labor before 37 Weeks</h3>
                            <p>Major cause of neonatal morbidity/mortality.</p>
                            <h4>Management</h4>
                            <ul>
                                <li><strong>Tocolytics:</strong> MgSO4, Nifedipine, Terbutaline (Stop contractions).</li>
                                <li><strong>Corticosteroids:</strong> Betamethasone (Mature fetal lungs).</li>
                                <li><strong>Antibiotics:</strong> GBS prophylaxis if status unknown.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Midwifery II Final Quiz',
                        questions: [
                            { q: "What is the priority nursing action for a prolapsed umbilical cord?", options: ["Push the cord back in", "Place mother in slight Trendelenburg", "Manually lift the presenting part off the cord", "Start Oxytocin immediately"], correct: 2 },
                            { q: "Which maneuver is used to resolve Shoulder Dystocia?", options: ["Kristeller maneuver", "McRoberts maneuver", "Leopold's maneuver", "Valsalva maneuver"], correct: 1 },
                            { q: "A boggy uterus that deviates to the right most likely indicates:", options: ["Full bladder", "Uterine rupture", "Retained placenta", "Hematoma"], correct: 0 },
                            { q: "The '4 T's' of postpartum hemorrhage include Tone, Trauma, Thrombin, and:", options: ["Time", "Tears", "Tissue", "Temperature"], correct: 2 },
                            { q: "Betamethasone is administered in preterm labor to:", options: ["Stop contractions", "Prevent infection", "Accelerate fetal lung maturity", "Prevent seizure"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: High Risk Obstetrics',
                        questions: [
                            { q: "The 'Turtle Sign' is a classic indication of:", options: ["Cord Prolapse", "Breech Presentation", "Shoulder Dystocia", "Placental Abruption"], correct: 2 },
                            { q: "Which of the following is considered a 'Time Critical' obstetric emergency?", options: ["Early labor", "Umbilical Cord Prolapse", "False Labor", "Lochia Rubra"], correct: 1 },
                            { q: "McRoberts maneuver involves:", options: ["Applying fundal pressure", "Flexing the mother's thighs sharply toward her abdomen", "Rotating the fetal head", "Turning the mother to her left side"], correct: 1 },
                            { q: "Uterine Atony (Boggy Uterus) is the leading cause of:", options: ["Postpartum Depression", "Mastitis", "Postpartum Hemorrhage (PPH)", "Infection"], correct: 2 },
                            { q: "A cervix that is 50% effaced is:", options: ["Thinning out", "Opening up", "Bleeding", "Infected"], correct: 0 },
                            { q: "Polyhydramnios (excess amniotic fluid) increases the risk of:", options: ["Oligohydramnios", "Cord Prolapse", "Post-term birth", "Small for Gestational Age baby"], correct: 1 },
                            { q: "Which type of breech presentation involves the hips flexed and knees extended (feet up by head)?", options: ["Complete Breech", "Frank Breech", "Footling Breech", "Kneeling Breech"], correct: 1 },
                            { q: "Magnesium Sulfate toxicity signs include:", options: ["Hyperreflexia", "Loss of Deep Tendon Reflexes (DTRs) and Respiratory Depression", "Tachycardia", "Hypertension"], correct: 1 },
                            { q: "The drug of choice to reverse Magnesium Sulfate toxicity is:", options: ["Naloxone", "Calcium Gluconate", "Vitamin K", "Protamine Sulfate"], correct: 1 },
                            { q: "HELLP syndrome stands for:", options: ["Hemolysis, Elevated Liver enzymes, Low Platelets", "Hypertension, Edema, Low Protein", "Headache, Eye changes, Leg pain", "High Energy, Low Labor Pain"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 30309,
                code: "NUR 309",
                title: "Midwifery III (Puerperium)",
                icon: "ph-baby",
                completed: false,
                description: "Care of the mother and newborn during the postpartum period, including physiological changes, complications, and family planning.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Physiology of Puerperium',
                        body: `
                            <h3>Involution and Healing</h3>
                            <p>The puerperium begins after placental delivery and lasts ~6 weeks. Key changes include:</p>
                            <ul>
                                <li><strong>Uterine Involution:</strong> Fundus descends 1 cm/day. Non-palpable by day 10.</li>
                                <li><strong>Lochia Stages:</strong>
                                    <ul>
                                        <li><em>Rubra</em> (Day 1-3): Red, bloody.</li>
                                        <li><em>Serosa</em> (Day 4-10): Pink/brown, serous.</li>
                                        <li><em>Alba</em> (Day 10-28): White/yellow, leukocytes.</li>
                                    </ul>
                                </li>
                                <li><strong>Cervix:</strong> Closes; external os changes from circular to slit-like ("fish mouth").</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Postnatal Assessment (BUBBLE-HE)',
                        body: `
                            <h3>Systematic Assessment</h3>
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee;">
                                <ul>
                                    <li><strong>B</strong>reasts: Soft vs. Engorged, Nipples (cracked/inverted).</li>
                                    <li><strong>U</strong>terus: Firmness, Height, Midline vs Deviated.</li>
                                    <li><strong>B</strong>ladder: Distention (can displace uterus).</li>
                                    <li><strong>B</strong>owel: Sounds, Flatus, Hemorrhoids.</li>
                                    <li><strong>L</strong>ochia: Color, Amount, Odor, Clots.</li>
                                    <li><strong>E</strong>pisiotomy: REEDA (Redness, Edema, Ecchymosis, Discharge, Approximation).</li>
                                    <li><strong>H</strong>oman's Sign*: Screen for DVT (pain on dorsiflexion).</li>
                                    <li><strong>E</strong>motional: Bonding, Affect.</li>
                                </ul>
                                <p style="font-size:0.8rem; color:#666;">*Note: Homan's is controversial; assess for redness/warmth/swelling instead.</p>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Lactation Management',
                        body: `
                            <h3>Breastfeeding Basics</h3>
                            <p><strong>Hormones:</strong> Prolactin (Milk production), Oxytocin (Milk ejection/Let-down).</p>
                            <p><strong>Latching:</strong> Mouth wide open, lips flanged out, asymmetric latch (more areola below).</p>
                            <p><strong>Positions:</strong> Cradle, Cross-cradle, Football hold (good for C/S), Side-lying.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Breast Complications',
                        body: `
                            <h3>Common Problems</h3>
                            <ul>
                                <li><strong>Engorgement:</strong> Full, hard, painful breasts. Manage with frequent feeding, cold cabbage leaves, warm showers before feeding.</li>
                                <li><strong>Mastitis:</strong> Infection (Staph aureus). Flu-like symptoms + localized red/hot wedge. Requires antibiotics + emptying breast.</li>
                                <li><strong>Abscess:</strong> Collection of pus req. drainage. Stop feeding on affected side if incision is near nipple.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Puerperal Sepsis',
                        body: `
                            <h3>Infection in the Puerperium</h3>
                            <p>Temperature >38°C on 2 separate occasions after first 24h. Major cause: Endometritis.</p>
                            <p><strong>Signs:</strong> Foul lochia, tender uterus, fever, tachycardia.</p>
                            <p><strong>Management:</strong> IV Antibiotics (Clindamycin + Gentamicin), Semi-Fowler's position (drainage).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Thromboembolic Disorders',
                        body: `
                            <h3>Hypercoagulability of Pregnancy</h3>
                            <p>Increased clotting factors persist postpartum. Risk of DVT → PE.</p>
                            <p><strong>Prevention:</strong> Early ambulation, SCDs, Hydration.</p>
                            <p><strong>Pulmonary Embolism (PE):</strong> Dyspnea, Chest pain, Hypoxia. Emergency!</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Perinatal Mental Health',
                        body: `
                            <h3>Mood Disorders</h3>
                            <ul>
                                <li><strong>Postpartum Blues:</strong> Transient (up to 2 weeks). Tearfulness, mood swings. Normal.</li>
                                <li><strong>Postpartum Depression (PPD):</strong> Persists >2 weeks. Anhedonia, guilt, sleep disturbance. Requires therapy/meds.</li>
                                <li><strong>Postpartum Psychosis:</strong> Emergency! Hallucinations, delusions, risk of harm to baby. Hospitalize.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Postpartum Hemorrhage (Secondary)',
                        body: `
                            <h3>Late PPH (>24h to 6 weeks)</h3>
                            <p><strong>Causes:</strong> Retained placental fragments, Subinvolution (failure of uterus to return to size), Infection.</p>
                            <p><strong>Signs:</strong> Prolonged lochia rubra, boggy uterus.</p>
                            <p><strong>Tx:</strong> D&C, Antibiotics, Methergine.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Family Planning',
                        body: `
                            <h3>Contraception</h3>
                            <p>Ovulation can resume before menses (as early as 3 weeks in non-lactating). LAM (Lactational Amenorrhea Method) works if exclusive BF <6mo.</p>
                            <p><strong>Options:</strong> POPs (Mini-pill) safe for BF. Estrogen decreases milk supply – avoid COCs until milk established (>6wks). IUDs safe.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Discharge Teaching',
                        body: `
                            <h3>Home Care</h3>
                            <p><strong>Danger Signs:</strong> heavy bleeding (soaking pad <1h), fever, severe headache/blurred vision (preeclampsia), leg pain.</p>
                            <p><strong>Follow-up:</strong> 2 weeks and 6 weeks standard.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Midwifery III Final Quiz',
                        questions: [
                            { q: "A client reports flu-like symptoms and a red, painful wedge on the left breast. What is the likely diagnosis?", options: ["Engorgement", "Mastitis", "Plugged Duct", "Breast Abscess"], correct: 1 },
                            { q: "Which lochia pattern is expected on postpartum Day 6?", options: ["Lochia Rubra", "Lochia Serosa", "Lochia Alba", "Lochia Purulenta"], correct: 1 },
                            { q: "A postpartum client has a boggy uterus deviated to the right. What is the priority nursing action?", options: ["Massage the fundus", "Administer Oxytocin", "Assist the client to void", "Call the provider"], correct: 2 },
                            { q: "Which contraceptive method is contraindicated for a breastfeeding mother at 2 weeks postpartum?", options: ["Progestin-only pills (Mini-pill)", "Copper IUD", "Combined Oral Contraceptives (Estrogen/Progestin)", "Condoms"], correct: 2 },
                            { q: "A client hears voices telling her the baby is evil. This is a sign of:", options: ["Postpartum Blues", "Postpartum Depression", "Postpartum Psychosis", "Normal exhaustion"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Postpartum Nursing',
                        questions: [
                            { q: "Uterine involution is best assessed by:", options: ["Weighing the patient", "Palpating the fundal height", "Measuring abdominal girth", "Counting lochia pads"], correct: 1 },
                            { q: "Which hormone is primarily responsible for milk production (synthesis)?", options: ["Oxytocin", "Estrogen", "Prolactin", "Progesterone"], correct: 2 },
                            { q: "A 'fish mouth' appearance of the cervix indicates:", options: ["The woman has never given birth (Nulliparous)", "The woman has given birth vaginally (Parous)", "Cervical cancer", "Infection"], correct: 1 },
                            { q: "To prevent mastitis, the most important teaching is:", options: ["Stop breastfeeding if nipples hurt", "Empty the breast completely with each feeding", "Wash nipples with soap", "Feed only on one side"], correct: 1 },
                            { q: "Postpartum Blues significantly differ from Postpartum Depression because 'The Blues':", options: ["Require hospitalization", "Last longer than 2 weeks", "Are transient and resolve within 2 weeks", "Involve hallucinations"], correct: 2 },
                            { q: "REEDA is an acronym used to assess:", options: ["Newborn reflexes", "Lochia amount", "Episiotomy/Laceration healing", "Breastfeeding latch"], correct: 2 },
                            { q: "Which position is recommended for a patient with Puerperal Sepsis (Endometritis)?", options: ["Supine", "Trendelenburg", "Semi-Fowler's (to promote drainage)", "Prone"], correct: 2 },
                            { q: "Signs of a Deep Vein Thrombosis (DVT) include:", options: ["Unilateral leg swelling, warmth, and redness", "Bilateral leg edema", "Cold, pale feet", "Decreased pulses"], correct: 0 },
                            { q: "Lochia Serosa typically lasts from:", options: ["Day 1-3", "Day 4-10", "Day 10-28", "6 weeks"], correct: 1 },
                            { q: "Taking Combined Oral Contraceptives (Estrogen) too early postpartum can:", options: ["Cause hemorrhage", "Decrease milk supply", "Increase milk supply", "Cause infection"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 30310,
                code: "NUR 310",
                title: "Research Methods",
                icon: "ph-magnifying-glass",
                completed: false,
                description: "Introduction to the research process, ethics, design, and evidence-based practice in nursing.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction to Nursing Research',
                        body: `
                            <h3>Foundation of Practice</h3>
                            <p><strong>Definition:</strong> Systematic inquiry to develop knowledge.</p>
                            <p><strong>Evidence-Based Practice (EBP):</strong> Integration of best research evidence + clinical expertise + patient values.</p>
                            <p><strong>Paradigms:</strong>
                                <ul><li><em>Positivist:</em> Objective, quantifiable (Quantitative).</li><li><em>Constructivist:</em> Subjective, experiential (Qualitative).</li></ul>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: The Research Process',
                        body: `
                            <h3>Steps in Inquiry</h3>
                            <ol>
                                <li><strong>Problem Identification:</strong> "Gap" in knowledge.</li>
                                <li><strong>Literature Review:</strong> What is already known?</li>
                                <li><strong>Methodology:</strong> Design, Sampling, Data Collection.</li>
                                <li><strong>Analysis:</strong> Stats or Themes.</li>
                                <li><strong>Dissemination:</strong> Publishing/Presenting.</li>
                            </ol>
                            <p><strong>PICO(T) Question:</strong> P=Patient, I=Intervention, C=Comparison, O=Outcome, (T=Time).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Research Ethics',
                        body: `
                            <h3>The Belmont Report</h3>
                            <ul>
                                <li><strong>Beneficence:</strong> "Do no harm", maximize benefits.</li>
                                <li><strong>Respect for Persons:</strong> Autonomy, Informed Consent.</li>
                                <li><strong>Justice:</strong> Fair selection of subjects.</li>
                            </ul>
                            <p><strong>IRB (Institutional Review Board):</strong> Committee that approves studies to protect human subjects.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Quantitative Designs',
                        body: `
                            <h3>Testing Hypotheses</h3>
                            <ul>
                                <li><strong>Experimental (RCT):</strong> Randomization + Control Group + Manipulation. Gold standard.</li>
                                <li><strong>Quasi-Experimental:</strong> Manipulation but NO randomization (e.g., Pre/Post test).</li>
                                <li><strong>Non-Experimental:</strong> Descriptive or Correlational (relationships, no cause-effect).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Qualitative Designs',
                        body: `
                            <h3>Understanding Experience</h3>
                            <ul>
                                <li><strong>Phenomenology:</strong> Lived experience of a phenomenon (e.g., "What is it like to live with HIV?").</li>
                                <li><strong>Ethnography:</strong> Culture and lifeways of a group.</li>
                                <li><strong>Grounded Theory:</strong> Developing a social process theory from data.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Sampling Methods',
                        body: `
                            <h3>Selecting Subjects</h3>
                            <ul>
                                <li><strong>Probability (Random):</strong> Each member has equal chance. Simple Random, Stratified. Reduces bias.</li>
                                <li><strong>Non-Probability:</strong> Convenience (available subjects), Purposive (hand-picked), Snowball (referrals). High bias risk.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Data Collection',
                        body: `
                            <h3>Tools and Techniques</h3>
                            <p><strong>Self-Report:</strong> Interviews, Questionnaires (Likert Scales).</p>
                            <p><strong>Biophysical:</strong> BP, Lab values (highly objective).</p>
                            <p><strong>Observation:</strong> Structured vs Unstructured.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Reliability & Validity',
                        body: `
                            <h3>Quality of Instruments</h3>
                            <p><strong>Reliability:</strong> Consistency. <em>Cronbach's Alpha</em> (>0.70 is good).</p>
                            <p><strong>Validity:</strong> Accuracy. Does it measure what it says it measures?</p>
                            <ul><li><em>Internal Validity:</em> Did the IV cause the DV? (Threats: History, Maturation).</li><li><em>External Validity:</em> Generalizability.</li></ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Data Analysis Basics',
                        body: `
                            <h3>Making Sense of Numbers</h3>
                            <p><strong>Descriptive:</strong> Describe the sample (Mean, Median, Mode, Standard Deviation).</p>
                            <p><strong>Inferential:</strong> Make predictions. <em>P-value</em> (<0.05 is significant). T-tests, ANOVA.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Dissemination',
                        body: `
                            <h3>Sharing Findings</h3>
                            <p>Research is useless if not shared. Methods: Peer-reviewed journals, Conferences (Posters/Podium), Clinical Guidelines.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Research Methods Final Quiz',
                        questions: [
                            { q: "In PICO(T), what does the 'I' stand for?", options: ["Identify", "Intervention", "Institution", "Indicator"], correct: 1 },
                            { q: "Which ethical principle is violated if a researcher forces a subject to participate?", options: ["Justice", "Beneficence", "Respect for Persons", "Non-maleficence"], correct: 2 },
                            { q: "A study explores 'The Lived Experience of Grief in Widows'. What design is this?", options: ["Grounded Theory", "Phenomenology", "Ethnography", "RCT"], correct: 1 },
                            { q: "Which is a characteristic of a True Experiment (RCT)?", options: ["Randomization", "Convenience Sampling", "No Control Group", "Description only"], correct: 0 },
                            { q: "The variable that is manipulated by the researcher is called the:", options: ["Dependent Variable", "Independent Variable", "Confounding Variable", "Extraneous Variable"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Research Methodology',
                        questions: [
                            { q: "Evidence-Based Practice (EBP) integrates research evidence with:", options: ["Cost saving measures", "Clinical expertise and Patient values", "Policy only", "Opinion"], correct: 1 },
                            { q: "Which part of a research article summarizes the entire study?", options: ["Introduction", "Abstract", "Methodology", "Discussion"], correct: 1 },
                            { q: "In a 'Double-Blind' study:", options: ["Neither the researcher nor the participant knows who is in the control group", "Only the researcher is blind", "Only the participant is blind", "Everyone knows everything"], correct: 0 },
                            { q: "Qualitative research primarily deals with:", options: ["Numbers and Statistics", "Words, Meanings, and Experiences", "Laboratory experiments", "Surveys"], correct: 1 },
                            { q: "A P-value of 0.03 indicates:", options: ["The results are likely due to chance", "The results are Statistically Significant", "The study is invalid", "No correlation"], correct: 1 },
                            { q: "Reviewing articles to see what is already known about a topic is called:", options: ["Data Analysis", "Literature Review", "Sampling", "Dissemination"], correct: 1 },
                            { q: "Which sampling method gives every member of the population an equal chance of being selected?", options: ["Convenience Sampling", "Purposive Sampling", "Simple Random Sampling", "Snowball Sampling"], correct: 2 },
                            { q: "The 'Belmont Report' is associated with:", options: ["Research Ethics (Beneficence, Justice, Respect)", "Statistical Analysis", "Qualitative Design", "Funding"], correct: 0 },
                            { q: "Reliability in a research instrument refers to its:", options: ["Accuracy", "Consistency", "Length", "Cost"], correct: 1 },
                            { q: "Triangulation involves:", options: ["Using multiple data sources/methods to validate findings", "Using three researchers", "Using three participants", "Doing the study three times"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 30312,
                code: "NUR 312",
                title: "Gender, Sexual & Reproductive Rights",
                icon: "ph-gender-intersex",
                completed: false,
                description: "Exploration of SRHR frameworks, gender-based violence, advocacy, and rights of vulnerable populations.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Gender vs Sex',
                        body: `
                            <h3>Understanding the Distortion</h3>
                            <ul>
                                <li><strong>Sex:</strong> Biological characteristics (Chromosomes, Hormones, Anatomy). "Male/Female".</li>
                                <li><strong>Gender:</strong> Socially constructed roles, behaviors, and attributes. "Masculine/Feminine".</li>
                                <li><strong>Stereotypes:</strong> Harmful generalizations (e.g., "Men don't cry") that affect health-seeking behavior.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Overview of SRHR',
                        body: `
                            <h3>Health and Rights</h3>
                            <p><strong>Definition:</strong> State of physical, mental, and social well-being in all matters relating to the reproductive system.</p>
                            <p><strong>Four Pillars:</strong>
                                <ul><li>Sexual Health</li><li>Sexual Rights</li><li>Reproductive Health</li><li>Reproductive Rights</li></ul>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: International Frameworks',
                        body: `
                            <h3>Global Commitments</h3>
                            <ul>
                                <li><strong>ICPD (Cairo 1994):</strong> Shifted focus from population control to individual rights.</li>
                                <li><strong>Beijing Platform (1995):</strong> Emphasized women's empowerment and gender equality.</li>
                                <li><strong>Maputo Protocol:</strong> The "African Women's Bill of Rights" - explicit protections against FGM and right to medical abortion in specific cases.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Harmful Cultural Practices',
                        body: `
                            <h3>Violations of Rights</h3>
                            <p><strong>FGM/C (Female Genital Mutilation/Cutting):</strong>
                                <ul><li>Type I: Clitoridectomy.</li><li>Type II: Excision.</li><li>Type III: Infibulation (Narrowing).</li><li>Type IV: All other harmful procedures (Pricking, cauterizing).</li></ul>
                            </p>
                            <p><strong>Child Marriage:</strong> Denies education, increases health risks (fistula, mortality).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Gender-Based Violence (GBV)',
                        body: `
                            <h3>A Public Health Crisis</h3>
                            <p><strong>Forms:</strong> Physical, Sexual, Emotional, Economic.</p>
                            <p><strong>Rape Trauma Syndrome:</strong> Acute phase (Disorganization) -> Long-term reorganization phase.</p>
                            <p><strong>Medical-Legal Evidence:</strong> Chain of custody, clear documentation, rape kits.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Adolescent SRH',
                        body: `
                            <h3>Unique Needs</h3>
                            <p><strong>Youth-Friendly Services:</strong> Private, confidential, non-judgmental, accessible hours.</p>
                            <p><strong>Consent Laws:</strong> Understanding age of consent vs age of access to services (varies by country).</p>
                            <p><strong>Teenage Pregnancy:</strong> High risk of eclampsia, anemia, and unsafe abortion.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Rights of Vulnerable Groups',
                        body: `
                            <h3>Leaving No One Behind</h3>
                            <ul>
                                <li><strong>Persons with Disabilities:</strong> Often infantilized or assumed asexual. higher risk of abuse.</li>
                                <li><strong>Refugees/IDPs:</strong> Lack of privacy, high risk of sexual violence, lack of sanitary supplies.</li>
                                <li><strong>LGBTQIA+:</strong> Discrimination leads to poor health outcomes and barrier to care.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Maternal Health Rights',
                        body: `
                            <h3>Respectful Maternity Care (RMC)</h3>
                            <p><strong>Obstetric Violence:</strong> Abuse, neglect, or disrespect during childbirth (e.g., slapping, non-consented procedures).</p>
                            <p><strong>Rights:</strong> To dignity, information, choice of companion, and freedom from discrimination.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Family Planning as a Right',
                        body: `
                            <h3>Autonomy</h3>
                            <p><strong>Voluntarism:</strong> No coercion (e.g., forced sterilization).</p>
                            <p><strong>Informed Choice:</strong> Full understanding of side effects and options.</p>
                            <p><strong>Access:</strong> Availability of commodities without third-party authorization (spousal consent).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Advocacy',
                        body: `
                            <h3>The Nurse's Role</h3>
                            <p><strong>Advocate:</strong> Speaking up for the patient's rights when they cannot.</p>
                            <p><strong>Policy:</strong> Engaging in legislation to protect women (e.g., anti-FGM laws).</p>
                            <p><strong>Empowerment:</strong> Educating patients to know and claim their rights.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'SRHR Final Quiz',
                        questions: [
                            { q: "Which international agreement first shifted the focus from population targets to individual reproductive rights?", options: ["Beijing Platform", "ICPD (Cairo 1994)", "Alma Ata Declaration", "Millennium Development Goals"], correct: 1 },
                            { q: "Type III FGM (Infibulation) involves:", options: ["Removal of the prepuce", "Removal of clitoris and labia minora", "Narrowing of the vaginal orifice", "Pricking or piercing"], correct: 2 },
                            { q: "Disrespect and abuse during childbirth is termed:", options: ["Negligence", "Malpractice", "Obstetric Violence", "Poor customer service"], correct: 2 },
                            { q: "Which is a core pillar of Youth-Friendly Services?", options: ["Parental presence required", "Non-judgmental attitude", "Limited hours", "Fee-for-service only"], correct: 1 },
                            { q: "The 'Maputo Protocol' is significant because it is:", options: ["A global treaty on climate", "The African Women's Bill of Rights", "A guideline for child labor", "A trade agreement"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: SRHR Advanced',
                        questions: [
                            { q: "Which type of FGM involves the narrowing of the vaginal orifice with creation of a covering seal (Infibulation)?", options: ["Type I", "Type II", "Type III", "Type IV"], correct: 2 },
                            { q: "The 'Beijing Platform for Action' (1995) primarily advanced:", options: ["Men's rights", "Women's empowerment and gender equality", "Child labor laws", "Environmental protection"], correct: 1 },
                            { q: "In the context of Gender-Based Violence, 'Economic Violence' refers to:", options: ["Physical assault", "Denial of resources, opportunities, or services", "Verbal abuse", "Sexual harassment"], correct: 1 },
                            { q: "Which term describes the socially constructed roles and behaviors considered appropriate for men and women?", options: ["Sex", "Gender", "Sexual Orientation", "Biology"], correct: 1 },
                            { q: "Obstetric Violence is a violation of which human right?", options: ["Right to travel", "Right to dignity and respectful care", "Right to vote", "Right to property"], correct: 1 },
                            { q: "The 'Chain of Custody' is crucial in GBV cases to:", options: ["Ensure the victim pays", "Preserve legal evidence for prosecution", "Clean the scene", "Archive records"], correct: 1 },
                            { q: "Post-Rape Care (PRC) should ideally be provided within:", options: ["7 days", "72 hours (for HIV PEP/Emergency Contraception)", "1 week", "1 month"], correct: 1 },
                            { q: "Which population is often 'infantilized' regarding their sexual rights?", options: ["Adolescents", "Persons with Disabilities", "Elderly", "Men"], correct: 1 },
                            { q: "Youth-Friendly Services must be:", options: ["Expensive", "Accessible, Confidential, and Non-judgmental", "Located only in schools", "Requires parental consent for all ages"], correct: 1 },
                            { q: "Advocacy in nursing involves:", options: ["Making decisions for the patient", "Speaking up for the rights and choices of the patient", "Remaining silent", "Following orders blindly"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 30314,
                code: "NUR 314",
                title: "Gynaecology",
                icon: "ph-person-simple-stand",
                completed: false,
                description: "Study of the female reproductive system including disorders, infections, oncology, and developmental stages.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Menstrual Disorders',
                        body: `
                            <h3>Common Abnormalities</h3>
                            <ul>
                                <li><strong>Amenorrhea:</strong> Absence of menses.
                                    <ul><li>Primary: No menses by 16.</li><li>Secondary: Cessation for 3-6 months.</li></ul>
                                </li>
                                <li><strong>Dysmenorrhea:</strong> Painful menses. 
                                    <ul><li>Primary: Excess prostaglandins.</li><li>Secondary: Pathology (Endometriosis).</li></ul>
                                </li>
                                <li><strong>PMS/PMDD:</strong> Cyclical physical/behavioral symptoms in luteal phase.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Abnormal Uterine Bleeding (AUB)',
                        body: `
                            <h3>PALM-COEIN Classification</h3>
                            <p>Standardized terminology for AUB causes.</p>
                            <div style="background: white; padding: 1rem; border-radius: 8px; border: 1px solid #eee;">
                                <h4>Structural (PALM)</h4>
                                <ul>
                                    <li><strong>P</strong>olyp</li>
                                    <li><strong>A</strong>denomyosis</li>
                                    <li><strong>L</strong>eiomyoma (Fibroids)</li>
                                    <li><strong>M</strong>alignancy</li>
                                </ul>
                                <h4>Non-Structural (COEIN)</h4>
                                <ul>
                                    <li><strong>C</strong>oagulopathy</li>
                                    <li><strong>O</strong>vulatory dysfunction</li>
                                    <li><strong>E</strong>ndometrial</li>
                                    <li><strong>I</strong>atrogenic</li>
                                    <li><strong>N</strong>ot classified</li>
                                </ul>
                            </div>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Pelvic Inflammatory Disease (PID)',
                        body: `
                            <h3>Infection of Upper Genital Tract</h3>
                            <p><strong>Etiology:</strong> Chlamydia, Gonorrhea.</p>
                            <p><strong>Symptoms:</strong> Pelvic pain, cervical motion tenderness ("Chandelier sign"), discharge.</p>
                            <p><strong>Sequelae:</strong> Infertility, Ectopic pregnancy, Chronic pelvic pain.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Infertility',
                        body: `
                            <h3>Inability to Conceive</h3>
                            <p>Defined as failure to conceive after 12 months of unprotected sex (>35 years: 6 months).</p>
                            <ul>
                                <li><strong>Female Factors:</strong> Ovulatory (PCOS), Tubal (PID), Uterine.</li>
                                <li><strong>Male Factors:</strong> Sperm count/motility.</li>
                                <li><strong>Workup:</strong> Semen analysis (First step), HSG (Hysterosalpingogram).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Benign Pelvic Conditions',
                        body: `
                            <h3>Common Disorders</h3>
                            <ul>
                                <li><strong>Uterine Fibroids:</strong> Benign smooth muscle tumors. Symptoms: Heavy bleeding, pressure.</li>
                                <li><strong>PCOS:</strong> Oligo-ovulation, Hyperandrogenism (Hirsutism), Polycystic ovaries. Risk of metabolic syndrome.</li>
                                <li><strong>Endometriosis:</strong> Endometrial tissue outside uterus. Symptoms: Cyclical pain, Dyspareunia, Infertility.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Benign Breast Disorders',
                        body: `
                            <h3>Non-Malignant Conditions</h3>
                            <ul>
                                <li><strong>Fibroadenoma:</strong> Solid, firm, mobile, painless lump. Common in young women.</li>
                                <li><strong>Fibrocystic Changes:</strong> Lumpy, tender breasts varying with cycle. Reduce caffeine, sodium.</li>
                                <li><strong>Intraductal Papilloma:</strong> Wart-like growth in duct using bloody nipple discharge.</li>
                                <li><strong>Galactorrhea:</strong> Milky discharge not associated with breastfeeding (Check Prolactin levels).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Structural Disorders',
                        body: `
                            <h3>Prolapse and Fistulas</h3>
                            <p><strong>Pelvic Organ Prolapse:</strong> Cystocele (Bladder), Rectocele (Rectum), Uterine Prolapse. Kegels, Pessaries, Surgery.</p>
                            <p><strong>Fistulas:</strong> Abnormal connection. 
                                <ul><li>VVF (Vesicovaginal): Constant urine leakage.</li><li>RVF (Rectovaginal): Fecal leakage.</li></ul>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Gynaecological Oncology',
                        body: `
                            <h3>Reproductive Cancers</h3>
                            <ul>
                                <li><strong>Cervical Ca:</strong> HPV association. Prevention: Vaccine, Pap smear.</li>
                                <li><strong>Endometrial Ca:</strong> Postmenopausal bleeding is key sign. Risk: Unopposed estrogen.</li>
                                <li><strong>Ovarian Ca:</strong> "Silent Killer". Vague GI symptoms (bloating). Late detection.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Menopause',
                        body: `
                            <h3>Cessation of Menses</h3>
                            <p>Defined as 12 months amenorrhea (~age 51). Decline in Estrogen.</p>
                            <p><strong>Symptoms:</strong> Hot flashes, Night sweats, Vaginal atrophy, Osteoporosis risk.</p>
                            <p><strong>Management:</strong> Lifestyle, HRT (Uses lowest dose for shortest time; risk of clots/breast ca).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Gender-Based Violence (GBV)',
                        body: `
                            <h3>Care of Survivors</h3>
                            <p><strong>Screening:</strong> Ask all clients privately. "Do you feel safe at home?"</p>
                            <p><strong>SANE Exam:</strong> Sexual Assault Nurse Examiner. Preserve evidence (paper bags, no shower). Prophylaxis for STI/Pregnancy.</p>
                            <p><strong>Support:</strong> Empathy, safety planning, referrals.</p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Gynaecology Final Quiz',
                        questions: [
                            { q: "A 25-year-old female presents with a solid, mobile, non-tender breast lump. What is the most likely diagnosis?", options: ["Breast Cancer", "Fibrocystic Changes", "Fibroadenoma", "Mastitis"], correct: 2 },
                            { q: "Which symptom is the hallmark of Endometrial Cancer in postmenopausal women?", options: ["Severe pelvic pain", "Abdominal bloating", "Painless vaginal bleeding", "Purulent discharge"], correct: 2 },
                            { q: "Cervical motion tenderness (Chandelier sign) is a classic finding in:", options: ["Endometriosis", "Pelvic Inflammatory Disease (PID)", "Uterine Fibroids", "Ovarian Cysts"], correct: 1 },
                            { q: "What is the primary risk factor for Cervical Cancer?", options: ["Smoking", "Obesity", "HPV Infection", "Nulliparity"], correct: 2 },
                            { q: "A client reports constant leakage of urine from the vagina following a difficult labor. The nurse suspects:", options: ["Stress Incontinence", "Vesicovaginal Fistula (VVF)", "Cystocele", "Uterine Prolapse"], correct: 1 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Gynaecology Review',
                        questions: [
                            { q: "Amenorrhea is defined as the absence of:", options: ["Ovulation", "Menstruation", "Pregnancy", "Pain"], correct: 1 },
                            { q: "Which of the following is the most common benign tumor of the uterus?", options: ["Polyp", "Leiomyoma (Fibroids)", "Adenomyosis", "Sarcoma"], correct: 1 },
                            { q: "Primary Dysmenorrhea is caused by an excess of:", options: ["Estrogen", "Progesterone", "Prostaglandins", "Luteinizing Hormone"], correct: 2 },
                            { q: "Polycystic Ovarian Syndrome (PCOS) is characterized by:", options: ["Hyperandrogenism and Oligo-ovulation", "Low estrogen and hot flashes", "Regular cycles and fertility", "Single large cyst"], correct: 0 },
                            { q: "A cystocele involves the protrusion of the:", options: ["Rectum into the vagina", "Uterus into the vagina", "Bladder into the vagina", "Small intestine into the vagina"], correct: 2 },
                            { q: "Endometriosis is characterized by the presence of endometrial tissue:", options: ["Inside the uterus only", "Outside the uterine cavity", "In the cervix only", "In the vagina only"], correct: 1 },
                            { q: "Which screening test is primarily used for Cervical Cancer?", options: ["Mammogram", "Pap Smear", "CA-125", "Colonoscopy"], correct: 1 },
                            { q: "Postmenopausal bleeding is the cardinal symptom of:", options: ["Ovarian Cancer", "Endometrial Cancer", "Cervical Cancer", "Breast Cancer"], correct: 1 },
                            { q: "Hormone Replacement Therapy (HRT) in menopause is most effective for treating:", options: ["Osteoporosis", "Hot flashes and night sweats (Vasomotor symptoms)", "Breast cancer risk", "Infertility"], correct: 1 },
                            { q: "Infertility is typically defined as failure to conceive after:", options: ["3 months of trying", "6 months of trying (>35 years) or 12 months (<35 years)", "2 years of trying", "1 month of trying"], correct: 1 }
                        ]
                    }
                ]
            },
            {
                id: 30316,
                code: "NUR 316",
                title: "Medical Biostatistics",
                icon: "ph-chart-bar",
                completed: false,
                description: "Statistical methods in health sciences: From data types and central tendency to hypothesis testing and ANOVA.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Introduction & Data Types',
                        body: `
                            <h3>The Foundation of Stats</h3>
                            <p>Statistics helps us make sense of health data. First, we must classify data types:</p>
                            <ul>
                                <li><strong>Nominal:</strong> Categories with no order (e.g., Blood Type A/B/O, Gender).</li>
                                <li><strong>Ordinal:</strong> Ordered categories with unequal intervals (e.g., Pain Scale 0-10, Stages of Cancer).</li>
                                <li><strong>Interval:</strong> Ordered with equal intervals, no true zero (e.g., Temperature in °C).</li>
                                <li><strong>Ratio:</strong> Ordered, equal intervals, true zero (e.g., Weight, Blood Pressure, Hemoglobin).</li>
                            </ul>
                            <p><em>Example:</em> "Stage 2 Hypertension" is Ordinal; "140 mmHg" is Ratio.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Measures of Central Tendency',
                        body: `
                            <h3>Where is the "Center"?</h3>
                            <ul>
                                <li><strong>Mean:</strong> The mathematical average. Sensitive to outliers. 
                                    <br><em>Example:</em> Average length of stay = (3+4+5)/3 = 4 days.</li>
                                <li><strong>Median:</strong> The middle number. Best for skewed data.
                                    <br><em>Example:</em> Salaries in a hospital (unaffected by one CEO's huge salary).</li>
                                <li><strong>Mode:</strong> The most frequent value.
                                    <br><em>Example:</em> Most common blood type in a ward (Group O).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Measures of Dispersion',
                        body: `
                            <h3>How "Spread Out" is the Data?</h3>
                            <ul>
                                <li><strong>Range:</strong> Difference between highest and lowest.
                                    <br><em>Example:</em> Age range of patients (18 to 90 years).</li>
                                <li><strong>Standard Deviation (SD):</strong> Average distance from the Mean.
                                    <br><em>Example:</em> Small SD = Lab results are consistent. Large SD = Lab results vary widely.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: Normal Distribution',
                        body: `
                            <h3>The Bell Curve</h3>
                            <p>In a perfect normal distribution, Mean = Median = Mode. 68% of data falls within 1 SD.</p>
                            <p><strong>Skewness:</strong>
                                <ul><li><em>Positively Skewed:</em> Tail points right (e.g., Income). Mean > Median.</li>
                                <li><em>Negatively Skewed:</em> Tail points left (e.g., Age at death). Mean < Median.</li></ul>
                            </p>
                            <p><em>Example:</em> Pediatric height/weight charts rely on normal distribution z-scores.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Hypothesis Testing',
                        body: `
                            <h3>Testing a claim</h3>
                            <ul>
                                <li><strong>Null Hypothesis (H0):</strong> No difference exists. 
                                    <br><em>Example:</em> "New dressing has SAME infection rate as old dressing."</li>
                                <li><strong>Alternative Hypothesis (H1):</strong> A difference exists.
                                    <br><em>Example:</em> "New dressing has LOWER infection rate."</li>
                                <li><strong>P-Value:</strong> Probability that results happened by chance. If P < 0.05, we reject H0 (Statistically Significant).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Parametric Tests (T-Test & ANOVA)',
                        body: `
                            <h3>Comparing Means (Normal Data)</h3>
                            <ul>
                                <li><strong>T-Test:</strong> Compares means of TWO groups.
                                    <br><em>Example:</em> Mean BP of Group A (Drug) vs Group B (Placebo).</li>
                                <li><strong>ANOVA (Analysis of Variance):</strong> Compares means of THREE or more groups.
                                    <br><em>Example:</em> Pain scores in Group A (Tylenol), Group B (Advil), and Group C (Morphine).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Non-Parametric Tests',
                        body: `
                            <h3>Comparing Categories (Non-Normal Data)</h3>
                            <p><strong>Chi-Square (χ²):</strong> Tests relationship between two categorical variables.</p>
                            <p><em>Example:</em> Is there an association between Smoking (Yes/No) and Lung Cancer (Yes/No)? categories vs categories.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Correlation',
                        body: `
                            <h3>Relationships</h3>
                            <p><strong>Pearson's r:</strong> Measures strength (-1 to +1) of relationship between two continuous variables.</p>
                            <ul>
                                <li><em>Positive correlation:</em> As Salt intake goes up, BP goes up.</li>
                                <li><em>Negative correlation:</em> As Exercise goes up, BMI goes down.</li>
                            </ul>
                            <p><strong>Correlation ≠ Causation!</strong></p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Vital Statistics',
                        body: `
                            <h3> Epidemiology Math</h3>
                            <ul>
                                <li><strong>Incidence:</strong> New cases over a time period. (Risk measure).</li>
                                <li><strong>Prevalence:</strong> Total cases at a point in time. (Burden measure).</li>
                                <li><strong>Mortality Rate:</strong> Deaths / Population.</li>
                            </ul>
                            <p><em>Example:</em> High incidence of flu in winter; High prevalence of diabetes year-round.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Interpreting Literature',
                        body: `
                            <h3>Reading Papers</h3>
                            <p><strong>Confidence Interval (CI):</strong> Range where the true value likely lies (usually 95%). Narrow CI = more precise.</p>
                            <p><strong>Clinical Significance:</strong> Does the statistical difference actually matter for the patient?
                                <br><em>Example:</em> A drug lowers BP by 1 mmHg (P<0.05). Statistically significant? Yes. Clinically significant? Probably not.
                            </p>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Biostatistics Final Quiz',
                        questions: [
                            { q: "Which P-value indicates statistical significance?", options: ["0.50", "0.10", "0.03", "1.00"], correct: 2 },
                            { q: "A researcher wants to compare the mean pain scores of THREE different intervention groups. Which test should they use?", options: ["T-Test", "ANOVA", "Chi-Square", "Pearson's r"], correct: 1 },
                            { q: "Blood pressure measured in mmHg is an example of which data type?", options: ["Nominal", "Ordinal", "Interval", "Ratio"], correct: 3 },
                            { q: "If the Mean is 100 and the Median is 80, the distribution is likely:", options: ["Normal", "Positively Skewed", "Negatively Skewed", "Bimodal"], correct: 1 },
                            { q: "The standard deviation measures:", options: ["The central point", "The most frequent value", "The spread/variability of data", " The statistical significance"], correct: 2 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Biostatistics Review',
                        questions: [
                            { q: "Which measure of central tendency is most affected by extreme outliers?", options: ["Median", "Mode", "Mean", "Range"], correct: 2 },
                            { q: "Data that can be categorized but not ordered (e.g., Eye Color) is:", options: ["Ordinal", "Nominal", "Interval", "Ratio"], correct: 1 },
                            { q: "A Type I Error occurs when:", options: ["You reject the null hypothesis when it is actually true (False Positive)", "You accept the null hypothesis when it is false (False Negative)", "You lose the data", "The sample size is too small"], correct: 0 },
                            { q: "In a normal distribution, approximately what percentage of data falls within 1 Standard Deviation of the mean?", options: ["50%", "68%", "95%", "99%"], correct: 1 },
                            { q: "Incidence refers to:", options: ["Total number of cases at a specific time", "Number of NEW cases over a period of time", "Number of deaths", "Number of cures"], correct: 1 },
                            { q: "A correlation coefficient (r) of -0.85 indicates:", options: ["A weak positive relationship", "A strong negative relationship", "No relationship", "A strong positive relationship"], correct: 1 },
                            { q: "Which test compares observed frequences to expected frequencies in categorical data?", options: ["T-Test", "ANOVA", "Chi-Square", "Regression"], correct: 2 },
                            { q: "If a 95% Confidence Interval for a Relative Risk includes the number 1 (e.g., 0.8 - 1.2), the result is:", options: ["Statistically Significant", "Not Statistically Significant", "Clinically Significant", "highly precise"], correct: 1 },
                            { q: "The Null Hypothesis (H0) typically states that:", options: ["There is a significant difference", "There is NO significant difference or relationship", "The intervention worked", "The data is skewed"], correct: 1 },
                            { q: "Sensitivity of a screening test is the ability to:", options: ["Correctly identify those With the disease (True Positive rate)", "Correctly identify those Without the disease (True Negative rate)", "Predict the future", "Measure severity"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 30318,
                code: "NUR 318",
                title: "Palliative Care Nursing and Gerontology",
                icon: "ph-hand-heart",
                completed: false,
                description: "Comprehensive care for patients with life-limiting illnesses and the specific needs of the aging population.",
                content: [
                    {
                        type: 'intro',
                        title: 'Module 1: Principles of Palliative Care',
                        body: `
                            <h3>Comfort vs Cure</h3>
                            <p><strong>Goal:</strong> Improve Quality of Life (QoL) for patients and families facing life-threatening illness.</p>
                            <p><strong>Hospice vs Palliative:</strong>
                                <ul><li><em>Palliative Care:</em> Any stage of illness, can be with curative treatment.</li><li><em>Hospice:</em> Prognosis < 6 months, curative treatment stopped.</li></ul>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 2: Pain Management',
                        body: `
                            <h3>The 5th Vital Sign</h3>
                            <p><strong>Total Pain:</strong> Physical, Psychological, Social, and Spiritual components.</p>
                            <p><strong>WHO Analgesic Ladder:</strong>
                                <ol>
                                    <li>Non-opioids (Paracetamol, NSAIDs).</li>
                                    <li>Weak opioids (Codeine, Tramadol).</li>
                                    <li>Strong opioids (Morphine, Fentanyl).</li>
                                </ol>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 3: Symptom Management',
                        body: `
                            <h3>Beyond Pain</h3>
                            <ul>
                                <li><strong>Dyspnea ("Air Hunger"):</strong> Manage with opioids (low dose), oxygen, fan therapy.</li>
                                <li><strong>Secretions ("Death Rattle"):</strong> No suction (distressing). Use anticholinergics (Hyoscine).</li>
                                <li><strong>Nausea:</strong> Assess cause (chemical vs gastric). Metoclopramide or Haloperidol.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 4: End-of-Life Care',
                        body: `
                            <h3>The Dying Process</h3>
                            <p><strong>Signs:</strong> Cool extremities, Mottling, Cheyne-Stokes breathing, reduced consciousness.</p>
                            <p><strong>Nursing Priorities:</strong> Mouth care, turning (if comfortable), presence, supporting the family.</p>
                            <p><strong>Post-Mortem:</strong> Dignified care of the body, removing tubes (unless coroner case), cultural respect.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 5: Grief and Loss',
                        body: `
                            <h3>The Emotional Journey</h3>
                            <p><strong>Kubler-Ross Stages:</strong> Denial, Anger, Bargaining, Depression, Acceptance (Not linear!).</p>
                            <p><strong>Types:</strong>
                                <ul><li><em>Anticipatory:</em> Grief before the actual death.</li><li><em>Complicated:</em> Prolonged, interferes with function (>6 months - 1 year).</li></ul>
                            </p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 6: Introduction to Gerontology',
                        body: `
                            <h3>The Aging Population</h3>
                            <p><strong>Ageism:</strong> Stereotyping older adults as senile, helpless, or burdens.</p>
                            <p><strong>Demographics:</strong> The "Silver Tsunami" - rapidly increasing elderly population requires specialized care.</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 7: Theories of Aging',
                        body: `
                            <h3>Why We Age</h3>
                            <ul>
                                <li><strong>Biological:</strong> <em>Wear and Tear</em> (cells damaged over time), <em>Free Radical</em> (oxidative stress).</li>
                                <li><strong>Psychosocial:</strong> <em>Activity Theory</em> (staying active = happiness) vs <em>Disengagement Theory</em> (mutual withdrawal).</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 8: Geriatric Syndromes',
                        body: `
                            <h3>The "Giants" of Geriatrics</h3>
                            <ul>
                                <li><strong>Falls:</strong> Leading cause of injury. Assess home safety (rugs, lighting).</li>
                                <li><strong>Frailty:</strong> Weight loss, weakness, exhaustion. High vulnerability to stressors.</li>
                                <li><strong>Delirium:</strong> Acute, fluctuating confusion (Medical Emergency!) vs <strong>Dementia:</strong> Chronic, progressive decline.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 9: Pharmacology in the Elderly',
                        body: `
                            <h3>Start Low, Go Slow</h3>
                            <p><strong>Pharmacokinetics:</strong> Reduced renal/hepatic function = High risk of toxicity.</p>
                            <p><strong>Polypharmacy:</strong> Use of multiple medications. Increases drug-drug interactions.</p>
                            <p><strong>Beers Criteria:</strong> List of meds potentially inappropriate for the elderly (e.g., Benzos, Anticholinergics).</p>
                        `
                    },
                    {
                        type: 'text',
                        title: 'Module 10: Ethical Issues',
                        body: `
                            <h3>Autonomy at the End</h3>
                            <ul>
                                <li><strong>Advance Directives:</strong> Living Will (wishes for care).</li>
                                <li><strong>DNR/DNI:</strong> Do Not Resuscitate / Do Not Intubate.</li>
                                <li><strong>Power of Attorney:</strong> Designated decision maker.</li>
                            </ul>
                        `
                    },
                    {
                        type: 'quiz',
                        title: 'Palliative & Geriatric Final Quiz',
                        questions: [
                            { q: "A dying patient has loud, gurgling respirations ('death rattle'). What is the best nursing intervention?", options: ["Deep suctioning", "Administering a diuretic", "Administering an anticholinergic (e.g., Hyoscine)", "Encouraging fluids"], correct: 2 },
                            { q: "According to the Kubler-Ross model, a patient saying 'I will go to church every day if I can just live until my daughter's wedding' is in which stage?", options: ["Denial", "Anger", "Bargaining", "Acceptance"], correct: 2 },
                            { q: "Which is a normal age-related change affecting medication metabolism?", options: ["Increased liver blood flow", "Decreased renal glomerular filtration rate (GFR)", "Increased total body water", "Increased serum albumin"], correct: 1 },
                            { q: "Delirium is characterized by:", options: ["Slow, gradual onset", "Clear consciousness", "Acute, fluctuating onset", "Permanent memory loss"], correct: 2 },
                            { q: "Which class of medications is generally considered inappropriate for the elderly (Beers Criteria) due to risk of falls and confusion?", options: ["Benzodiazepines", "Beta-blockers", "Calcium Channel Blockers", "Proton Pump Inhibitors"], correct: 0 }
                        ]
                    },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Palliative & Gerontology Review',
                        questions: [
                            { q: "Palliative care differs from Hospice care in that Palliative Care:", options: ["Is only for the last 6 months of life", "Cannot include curative treatment", "Can be provided at any stage of a serious illness", "Is only for cancer patients"], correct: 2 },
                            { q: "The 'Death Rattle' is caused by:", options: ["Choking on food", "Accumulation of secretions in the airway", "Fluid in the lungs (pulmonary edema)", "Pneumonia"], correct: 1 },
                            { q: "Which pain scale is most appropriate for a patient with advanced dementia who cannot verbalize pain?", options: ["Visual Analog Scale (0-10)", "Wong-Baker FACES", "PAINAD Scale", "Numerical Rating Scale"], correct: 2 },
                            { q: "The 'Silver Tsunami' refers to:", options: ["A flood", "The rapid increase in the elderly population", "A new drug", "A type of cancer"], correct: 1 },
                            { q: "Ageism is defined as:", options: ["Respecting elders", "Providing specialized care", "Stereotyping and discrimination against people based on age", "Studying aging"], correct: 2 },
                            { q: "Which theory of aging suggests that cells wear out from repeated use and damage over time?", options: ["Wear and Tear Theory", "Activity Theory", "Free Radical Theory", "Programmed Theory"], correct: 0 },
                            { q: "Polypharmacy is typically defined as the concurrent use of:", options: ["2 or more meds", "5 or more medications", "10 or more meds", "Any meds"], correct: 1 },
                            { q: "A Living Will is a type of:", options: ["Financial will", "Advance Directive", "Power of Attorney", "Medical order"], correct: 1 },
                            { q: "Cheyne-Stokes respirations are characterized by:", options: ["Rapid deep breathing", "Periods of apnea alternating with deep, rapid breathing", "Slow shallow breathing", "Gasping"], correct: 1 },
                            { q: "The primary goal of palliative care regarding symptoms is:", options: ["To cure the disease", "To sedate the patient", "To manage distress and improve quality of life", "To hasten death"], correct: 2 }
                        ]
                    }
                ]
            }
        ],
        year4: [
            {
                id: 40400, code: "NUR 400", title: "Mental Health Nursing", icon: "ph-brain", completed: false,
                content: [
                    { type: 'text', title: 'Introduction', body: '<h3>Introduction</h3><p>Content to be added.</p>' },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Mental Health Nursing',
                        questions: [
                            { q: "A client with schizophrenia is experiencing auditory hallucinations. What is the nurse's best response?", options: ["'I don't hear anything, so it's not real.'", "'Tell me what the voices are saying to you.'", "'Why are you acting like this?'", "'You need to ignore them.'"], correct: 1 },
                            { q: "Positive symptoms of Schizophrenia include:", options: ["Flat affect", "Social withdrawal", "Hallucinations and Delusions", "Anhedonia"], correct: 2 },
                            { q: "Which of the following is an Extrapyramidal Side Effect (EPS) of antipsychotic medication?", options: ["Hypertension", "Dystonia (muscle spasms)", "Diarrhea", "Increased appetite"], correct: 1 },
                            { q: "Lithium Carbonate is primarily used to treat:", options: ["Schizophrenia", "Bipolar Disorder", "Major Depression", "Anxiety"], correct: 1 },
                            { q: "What is the therapeutic range for Lithium?", options: ["2.0 - 3.0 mEq/L", "0.6 - 1.2 mEq/L", "0.1 - 0.5 mEq/L", "10 - 20 mEq/L"], correct: 1 },
                            { q: "Neuroleptic Malignant Syndrome (NMS) is a life-threatening reaction characterized by:", options: ["Hypothermia", "High Fever (Hyperpyrexia) and Muscle Rigidity", "Bradycardia", "Low blood pressure"], correct: 1 },
                            { q: "Defense Mechanisms are:", options: ["Conscious efforts to solve problems", "Unconscious strategies to reduce anxiety", "Physical barriers", "Medication side effects"], correct: 1 },
                            { q: "Displacement is defined as:", options: ["Returning to an earlier developmental stage", "Transferring feelings to a less threatening target", "Justifying unacceptable behavior", "Refusing to acknowledge reality"], correct: 1 },
                            { q: "Which personality disorder is characterized by instability in relationships, self-image, and affect, plus impulsivity?", options: ["Narcissistic", "Borderline Personality Disorder (BPD)", "Antisocial", "Schizoid"], correct: 1 },
                            { q: "The priority nursing assessment for a client with Major Depressive Disorder is:", options: ["Sleep patterns", "Appetite", "Suicide risk", "Energy level"], correct: 2 }
                        ]
                    }
                ]
            },
            {
                id: 40401, code: "NUR 401", title: "Epidemiology", icon: "ph-globe", completed: false,
                content: [
                    { type: 'text', title: 'Introduction', body: '<h3>Introduction</h3><p>Content to be added.</p>' },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Epidemiology Basics',
                        questions: [
                            { q: "Epidemiology is best defined as the study of:", options: ["Skin diseases", "The distribution and determinants of health-related states in populations", "Individual patient care", "Hospital administration"], correct: 1 },
                            { q: "Which part of the Epidemiological Triad represents the cause of the disease (e.g., bacteria, virus)?", options: ["Host", "Environment", "Agent", "Vector"], correct: 2 },
                            { q: "Prevalence refers to:", options: ["The number of new cases", "The total number of existing cases at a specific time", "The death rate", "The cure rate"], correct: 1 },
                            { q: "An 'Endemic' disease is:", options: ["One that spreads globally", "One that occurs continuously in a specific population/region", "A sudden outbreak", "A rare disease"], correct: 1 },
                            { q: "Herd immunity is achieved when:", options: ["Nobody is vaccinated", "A sufficient proportion of the population is immune, protecting those who are not", "Animals are immune", "The disease is eradicated"], correct: 1 },
                            { q: "Incidence measures:", options: ["Risk (New cases)", "Burden (Total cases)", "Severity", "Duration"], correct: 0 },
                            { q: "A 'Pandemic' is an epidemic that has:", options: ["Stopped spreading", "Spread over several countries or continents", "Affected only children", "No cure"], correct: 1 },
                            { q: "Which level of prevention involves screening and early detection (e.g., Pap smear)?", options: ["Primary", "Secondary", "Tertiary", "Quaternary"], correct: 1 },
                            { q: "The 'Web of Causation' model is used to explain:", options: ["Single cause diseases", "Complex chronic diseases with multiple risk factors", "Spider bites", " Infectious cycles"], correct: 1 },
                            { q: "Mortality Rate refers to:", options: ["The number of deaths in a population", "The number of illnesses", "The birth rate", "The survival rate"], correct: 0 }
                        ]
                    }
                ]
            },
            {
                id: 40402, code: "NUR 402", title: "Med Surg Specialties 1", icon: "ph-stethoscope", completed: false,
                content: [
                    { type: 'text', title: 'Introduction', body: '<h3>Introduction</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 1', body: '<h3>Lecture 1</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 2', body: '<h3>Lecture 2</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 3', body: '<h3>Lecture 3</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 4', body: '<h3>Lecture 4</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 5', body: '<h3>Lecture 5</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 6', body: '<h3>Lecture 6</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 7', body: '<h3>Lecture 7</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 8', body: '<h3>Lecture 8</h3><p>Content to be added.</p>' },
                    { type: 'text', title: 'Lecture 9', body: '<h3>Lecture 9</h3><p>Content to be added.</p>' },
                    {
                        type: 'quiz',
                        title: 'Quiz Bank 1: Med Surg Specialties',
                        questions: [
                            { q: "A patient with acute pancreatitis has a positive Cullen's sign. This is described as:", options: ["Blue discoloration around the umbilicus", "Flank bruising", "Right upper quadrant pain", "Rebound tenderness"], correct: 0 },
                            { q: "Which lab value is most specific for myocardial damage (Heart Attack)?", options: ["CK-MB", "Troponin", "Myoglobin", "LDH"], correct: 1 },
                            { q: "In a patient with a tension pneumothorax, the trachea deviates:", options: ["Towards the affected side", "Away from the affected side", "Does not move", "Backwards"], correct: 1 },
                            { q: "The priority assessment for a patient with a new cast is:", options: ["Neurovascular status (CMS check)", "Cleanliness of the cast", "Itching", "Color of the cast"], correct: 0 },
                            { q: "Which type of burn is painless due to destruction of nerve endings?", options: ["First Degree (Superficial)", "Second Degree (Partial Thickness)", "Third Degree (Full Thickness)", "Sunburn"], correct: 2 },
                            { q: "A patient with liver cirrhosis has high ammonia levels. Which medication is anticipated?", options: ["Lactulose", "Furosemide", "Metoprolol", "Insulin"], correct: 0 },
                            { q: "Cushing's Syndrome is caused by an excess of:", options: ["Thyroid hormone", "Insulin", "Cortisol", "Growth Hormone"], correct: 2 },
                            { q: "A patient with Addisons disease requires:", options: ["Fluid restriction", "Lifelong steroid replacement", "Low salt diet", "fluid removal"], correct: 1 },
                            { q: "Which heart rhythm is a 'sawtooth' pattern?", options: ["Atrial Fibrillation", "Atrial Flutter", "Ventricular Tachycardia", "Sinus Bradycardia"], correct: 1 },
                            { q: "The classic sign of a Basilar Skull Fracture is:", options: ["Battle's Sign (bruising behind ear)", "Butterfly rash", "Moon face", "Buffalo Hump"], correct: 0 }
                        ]
                    }
                ]
            }
        ],
    },
    exams: {
        nclex: [
            {
                id: 'bank1',
                title: 'Test Bank 1: Comprehensive NCLEX Review',
                questions: [
                    { id: 1, question: "A nurse is assigned four clients. Which client should the nurse assess first?", options: ["A client with COPD and an O2 saturation of 92%", "A client with pneumonia and a fever of 38.1°C (100.6°F)", "A client with a femur fracture reporting a pain level of 7/10", "A client with asthma reporting shortness of breath and audible inspiratory stridor"], correct: 3 },
                    { id: 2, question: "A client is prescribed digoxin 0.25 mg PO daily. Which assessment finding requires the nurse to withhold the dose and notify the provider?", options: ["Serum potassium 3.8 mEq/L", "Apical pulse 52 beats/min", "Blood pressure 140/90 mmHg", "Digoxin level 0.9 ng/mL"], correct: 1 },
                    { id: 3, question: "A client is receiving IV potassium chloride (KCl) for hypokalemia. The client complains of burning at the IV site. What is the most appropriate nursing action?", options: ["Stop the infusion and discontinue the IV immediately", "Slow the rate of the infusion", "Apply a warm compress to the site while the infusion continues", "Administer the medication via IV push instead"], correct: 1 },
                    { id: 4, question: "A nurse observes a pattern of Variable Decelerations on the fetal monitor strip. What is the priority nursing intervention?", options: ["Administer oxygen via face mask", "Reposition the mother to her side or knee-chest position", "Prepare for an immediate C-section", "Document the finding as normal"], correct: 1 },
                    { id: 5, question: "A client with schizophrenia says, 'The FBI is monitoring my thoughts through the television.' What is the best response by the nurse?", options: ["'The FBI has better things to do than watch you.'", "'That must be frightening, but the television is turned off.'", "'Let’s turn on the TV and prove they aren't there.'", "'You need to take your medication so these thoughts go away.'"], correct: 1 },
                    { id: 6, question: "A client with Type 1 Diabetes is found unresponsive with cool, clammy skin. Which action should the nurse take first?", options: ["Administer 10 units of Regular insulin", "Check the blood glucose level", "Administer 50% Dextrose IV push", "Call the provider"], correct: 2 },
                    { id: 7, question: "A nurse enters a room and finds a fire in the trash can. According to the RACE acronym, what is the first action?", options: ["Activate the fire alarm", "Extinguish the fire", "Rescue the client from the room", "Close the door to confine the fire"], correct: 2 },
                    { id: 8, question: "A client has a new colostomy. Which finding indicates a need for immediate intervention?", options: ["The stoma is beefy red", "The stoma is edematous (swollen) in the first 24 hours", "The stoma is purple or black", "There is a small amount of bleeding when touched"], correct: 2 },
                    { id: 9, question: "A client with Acute Kidney Injury (AKI) has a serum potassium level of 6.5 mEq/L. The nurse should prepare to administer which medication first to protect the heart?", options: ["Sodium Polystyrene Sulfonate (Kayexalate)", "Furosemide (Lasix)", "IV Calcium Gluconate", "Regular Insulin with Dextrose"], correct: 2 },
                    { id: 10, question: "A client is admitted with suspected active Tuberculosis (TB). Which isolation precaution is required?", options: ["Contact Precautions", "Droplet Precautions", "Airborne Precautions", "Standard Precautions only"], correct: 2 },
                    { id: 11, question: "A nurse is caring for a client with increased Intracranial Pressure (ICP). Which position is most appropriate?", options: ["High Fowler’s (90 degrees)", "Trendelenburg (head down)", "Supine with head flat", "Semi-Fowler’s (head of bed elevated 30 degrees)"], correct: 3 },
                    { id: 12, question: "A client on Warfarin (Coumadin) asks about diet. Which statement indicates the client understands the teaching?", options: ["'I will eat plenty of spinach and kale to stay healthy.'", "'I will avoid all green vegetables.'", "'I will maintain a consistent intake of green leafy vegetables.'", "'I need to increase my Vitamin K intake.'"], correct: 2 },
                    { id: 13, question: "Which task is appropriate for the nurse to delegate to a Licensed Practical Nurse (LPN/LVN)?", options: ["Assessing a newly admitted client", "Administering IV push pain medication", "Administering a routine oral medication to a stable client", "Developing the plan of care"], correct: 2 },
                    { id: 14, question: "A 2-year-old is brought to the ER with a 'barking' cough and inspiratory stridor. What is the most likely diagnosis?", options: ["Epiglottitis", "Croup (Laryngotracheobronchitis)", "Asthma", "Bronchiolitis"], correct: 1 },
                    { id: 15, question: "A client refuses a life-saving blood transfusion due to religious beliefs. What is the nurse's priority action?", options: ["Convince the client that the blood is necessary", "Administer the blood once the client falls asleep", "Notify the provider and document the refusal", "Call the hospital ethics committee immediately"], correct: 2 },
                    { id: 16, question: "A client with Hemophilia A falls and injures their knee. What is the priority nursing intervention?", options: ["Apply a warm compress to the knee", "Administer aspirin for pain", "Immobilize the joint and elevate the leg", "Encourage range of motion exercises to prevent stiffness"], correct: 2 },
                    { id: 17, question: "Which laboratory value indicates that a client receiving Heparin has reached a therapeutic level?", options: ["INR of 2.5", "aPTT of 60 seconds (Control 30 seconds)", "Platelet count of 150,000", "Hemoglobin of 14 g/dL"], correct: 1 },
                    { id: 18, question: "A client returns from abdominal surgery. The wound dehisces and eviscerates (organs protrude). What is the first nursing action?", options: ["Push the organs back in gently", "Cover the wound with a sterile, saline-soaked dressing", "Take the client's vital signs", "Call the surgeon"], correct: 1 },
                    { id: 19, question: "Which finding is an early sign of Hypovolemic Shock?", options: ["Hypotension", "Bradycardia", "Tachycardia", "Warm, flushed skin"], correct: 2 },
                    { id: 20, question: "A client is diagnosed with Clostridium difficile (C. diff). Which hand hygiene method is required?", options: ["Alcohol-based hand sanitizer", "Soap and water", "Surgical scrub with chlorhexidine", "Sterile gloves only"], correct: 1 }
                ]
            },
            {
                id: 'bank2',
                title: 'Test Bank 2: Specialized Nursing Care',
                questions: [
                    { id: 1, question: "A client with preeclampsia is receiving Magnesium Sulfate. The nurse notes a respiratory rate of 10 breaths/min and absent deep tendon reflexes (DTRs). What is the priority action?", options: ["Decrease the infusion rate", "Prepare Calcium Gluconate", "Assess the blood pressure", "Document the findings as expected side effects"], correct: 1 },
                    { id: 2, question: "An infant with Tetralogy of Fallot becomes cyanotic and irritable during crying (a 'Tet spell'). What is the first nursing intervention?", options: ["Administer morphine sulfate", "Place the infant in a knee-chest position", "Start IV fluids", "Administer 100% oxygen via blow-by"], correct: 1 },
                    { id: 3, question: "A client with a T6 spinal cord injury reports a severe pounding headache and has a BP of 210/110 mmHg. The client is flushed above the level of injury. What is the most likely cause?", options: ["Spinal shock", "Increased Intracranial Pressure", "Autonomic Dysreflexia", "Pulmonary Embolism"], correct: 2 },
                    { id: 4, question: "A client taking Lithium Carbonate for Bipolar Disorder presents with vomiting, diarrhea, and slurred speech. The lithium level is 2.0 mEq/L. What is the nurse's interpretation?", options: ["The level is therapeutic; treat the side effects", "The level is slightly elevated but requires no action", "The level indicates severe toxicity", "The level is too low; the dose needs increasing"], correct: 2 },
                    { id: 5, question: "A client with a lower leg cast reports severe pain that is unrelieved by pain medication. The toes are pale and cool. What complication does the nurse suspect?", options: ["Deep Vein Thrombosis (DVT)", "Osteomyelitis", "Compartment Syndrome", "Pressure ulcer"], correct: 2 },
                    { id: 6, question: "A nurse is caring for a client with severe COPD. The client is prescribed Oxygen. Which flow rate is generally most appropriate to prevent suppressing the respiratory drive?", options: ["2 L/min via nasal cannula", "6 L/min via simple face mask", "10 L/min via non-rebreather", "5 L/min via nasal cannula"], correct: 0 },
                    { id: 7, question: "A client recently had a thyroidectomy. The nurse assesses the client for Trousseau’s sign. How is this performed?", options: ["Tap the facial nerve in front of the ear", "Inflate a BP cuff above systolic pressure for 3 minutes", "Ask the client to touch their chin to their chest", "Dorsiflex the foot briskly"], correct: 1 },
                    { id: 8, question: "A client is admitted with suspected appendicitis. The client suddenly reports that the pain has completely stopped. What does this likely indicate?", options: ["The appendix has healed", "The appendix has ruptured", "The medication is working", "It was likely just gas pain"], correct: 1 },
                    { id: 9, question: "Fifteen minutes after starting a blood transfusion, the client complains of lower back pain and chills. What is the priority action?", options: ["Slow the infusion rate", "Administer diphenhydramine (Benadryl)", "Stop the transfusion immediately", "Assess vital signs"], correct: 2 },
                    { id: 10, question: "A 4-week-old infant presents with projectile vomiting immediately after feeding. The nurse palpates an olive-shaped mass in the right upper quadrant. What is the likely diagnosis?", options: ["GERD", "Pyloric Stenosis", "Intussusception", "Hirschsprung's disease"], correct: 1 },
                    { id: 11, question: "A nurse is admitting a client with Herpes Zoster (Shingles) with disseminated lesions. Which precautions are necessary?", options: ["Contact Precautions only", "Droplet Precautions", "Airborne and Contact Precautions", "Standard Precautions only"], correct: 2 },
                    { id: 12, question: "A client is taking Nitroglycerin sublingual for angina. Which instruction should the nurse include?", options: ["'Swallow the tablet with a full glass of water.'", "'Take one tablet every 5 minutes, up to 3 doses, if pain persists.'", "'Store the tablets in a clear plastic container.'", "'Take the medication only when pain is severe.'"], correct: 1 },
                    { id: 13, question: "A nurse is assessing a client with an AV fistula in the left arm. Which action is appropriate?", options: ["Take the blood pressure on the left arm", "Palpate for a thrill and listen for bruits", "Use the fistula for IV fluid administration", "Draw blood from the fistula for labs"], correct: 1 },
                    { id: 14, question: "A client with severe depression suddenly becomes energetic and cheerful after weeks of being withdrawn. Why must the nurse monitor this client closely?", options: ["The antidepressant is finally working", "The client is ready for discharge", "The client may have the energy to carry out a suicide plan", "The client is entering a manic phase"], correct: 2 },
                    { id: 15, question: "A laboring client is 5 cm dilated and requests an epidural. After the epidural is placed, the maternal blood pressure drops to 90/50 mmHg. What is the priority nursing action?", options: ["Assess fetal heart rate", "Place the client in a supine position", "Turn the client to the left side and increase IV fluids", "Administer Epinephrine"], correct: 2 },
                    { id: 16, question: "A client taking Enalapril for hypertension reports a dry, nagging cough. What is the nurse's best response?", options: ["'This is a common side effect; the provider may change your medication.'", "'Take a cough suppressant syrup.'", "'Increase your fluid intake.'", "'Stop taking the medication immediately.'"], correct: 0 },
                    { id: 17, question: "Which toy is most appropriate for a 6-month-old infant?", options: ["A push-pull toy", "A mobile with contrasting colors", "Large, soft blocks", "A puzzle with large pieces"], correct: 2 },
                    { id: 18, question: "A client has burns on the front of the torso and the front of both arms. Using the Rule of Nines, what is the TBSA (Total Body Surface Area) burned?", options: ["18%", "27%", "36%", "45%"], correct: 1 },
                    { id: 19, question: "Two nurses are arguing loudly at the nurses' station about the schedule. What is the charge nurse's best action?", options: ["Ignore the argument; they will work it out", "Tell them to stop immediately and return to work", "Move the discussion to a private area such as the break room", "Report them to the nurse manager"], correct: 2 },
                    { id: 20, question: "A client is receiving chemotherapy and has a platelet count of 20,000/mm³. Which intervention is most important?", options: ["Provide a soft-bristle toothbrush", "Encourage vigorous flossing", "Administer aspirin for headaches", "Monitor temperature every 4 hours"], correct: 0 }
                ]
            },
            {
                id: 'bank3',
                title: 'Test Bank 3: Critical Care & Pharmacology',
                questions: [
                    { id: 1, question: "A nurse is assessing a client with Addison's disease (Adrenal Insufficiency). Which skin manifestation is characteristic of this condition?", options: ["Butterfly rash on cheeks", "Bronze hyperpigmentation of the skin", "Purple striae on the abdomen", "Jaundice"], correct: 1 },
                    { id: 2, question: "A nurse observes continuous bubbling in the water seal chamber of a client's chest tube drainage system. What does this indicate?", options: ["The system is functioning normally", "There is an air leak in the system", "The lung has fully expanded", "The suction pressure is too high"], correct: 1 },
                    { id: 3, question: "A client prescribed phenelzine (Nardil), an MAOI, for depression is ordering lunch. Which item should the nurse instruct the client to avoid?", options: ["Grilled chicken breast", "Fresh cottage cheese", "Pepperoni pizza", "Steamed broccoli"], correct: 2 },
                    { id: 4, question: "A parent asks when they should administer pancreatic enzymes to their child with Cystic Fibrosis. What is the nurse's best response?", options: ["'Give them once a day in the morning.'", "'Give them with every meal and snack.'", "'Give them only if the child has diarrhea.'", "'Give them at bedtime.'"], correct: 1 },
                    { id: 5, question: "A nurse is testing for meningeal irritation in a client with suspected meningitis. The nurse flexes the client's hip and knee at 90 degrees, then attempts to extend the leg. The client reports pain and resistance. This is a positive:", options: ["Babinski reflex", "Brudzinski's sign", "Kernig's sign", "Romberg test"], correct: 2 },
                    { id: 6, question: "A client arrives at the ER with crushing chest pain radiating to the left arm. Which intervention is the priority?", options: ["Obtain a 12-lead ECG", "Draw blood for Troponin levels", "Administer Aspirin 325 mg orally", "Insert a peripheral IV"], correct: 0 },
                    { id: 7, question: "A client taking Atorvastatin (Lipitor) reports muscle pain and weakness. The nurse suspects Rhabdomyolysis. Which laboratory value should be checked?", options: ["Creatine Kinase (CK)", "Hemoglobin A1C", "White Blood Cell count", "Potassium"], correct: 0 },
                    { id: 8, question: "A nurse is teaching a client how to use a cane. On which side should the client hold the cane?", options: ["The weak side", "The strong side", "Whichever side is most comfortable", "Alternating sides"], correct: 1 },
                    { id: 9, question: "A client with Dumping Syndrome asks about dietary changes to manage symptoms. Which recommendation is appropriate?", options: ["'Drink fluids with your meals.'", "'Eat a diet high in simple carbohydrates.'", "'Lie down for 30 minutes after eating.'", "'Eat three large meals a day.'"], correct: 2 },
                    { id: 10, question: "A nurse is mixing NPH (cloudy) and Regular (clear) insulin in one syringe. What is the correct order?", options: ["Inject air into Regular, inject air into NPH, draw up Regular, draw up NPH", "Inject air into NPH, inject air into Regular, draw up Regular, draw up NPH", "Draw up NPH, then draw up Regular", "Inject air into NPH, inject air into Regular, draw up NPH, draw up Regular"], correct: 1 },
                    { id: 11, question: "A child with Kawasaki Disease is prescribed high-dose Aspirin. The parents ask why, as they were told aspirin is bad for children. What is the nurse's explanation?", options: ["'It helps lower the high fever associated with this disease.'", "'It is used to prevent aneurysm formation and blood clots.'", "'It is a mistake; I will call the doctor.'", "'It treats the joint pain.'"], correct: 1 },
                    { id: 12, question: "A client 2 hours postpartum has a large amount of lochia rubra and a boggy uterus. The nurse massages the fundus but it remains boggy. The bladder is empty. Which medication does the nurse anticipate?", options: ["Terbutaline", "Methylergonovine (Methergine)", "Magnesium Sulfate", "Betamethasone"], correct: 1 },
                    { id: 13, question: "A client has a serum sodium level of 115 mEq/L (Hyponatremia). Which system should the nurse prioritize during assessment?", options: ["Gastrointestinal", "Neurological", "Integumentary", "Respiratory"], correct: 1 },
                    { id: 14, question: "A nurse is suctioning a client with a tracheostomy. What is the maximum duration for each suction pass?", options: ["5 seconds", "10–15 seconds", "30 seconds", "Until secretions are clear"], correct: 1 },
                    { id: 15, question: "A client presents an Advance Directive that states 'Do Not Resuscitate' (DNR). The family insists the nurse perform CPR if the client stops breathing. What should the nurse do?", options: ["Honor the family's wishes as they are next of kin", "Call security", "Honor the client's Advance Directive and do not perform CPR", "Perform CPR but stop if the doctor arrives"], correct: 2 },
                    { id: 16, question: "A client with Sickle Cell Anemia is admitted in a Vaso-Occlusive crisis. Which intervention is the priority?", options: ["Administer IV fluids and pain medication", "Administer iron supplements", "Apply cold compresses to painful joints", "Encourage ambulation"], correct: 0 },
                    { id: 17, question: "A client has a Central Venous Pressure (CVP) of 2 mm Hg. What does this indicate?", options: ["Fluid volume overload", "Right ventricular failure", "Fluid volume deficit (Hypovolemia)", "Normal finding"], correct: 2 },
                    { id: 18, question: "A client is receiving Vancomycin. The nurse notes the client's face and neck are flushing red. What is this reaction, and what is the action?", options: ["Anaphylaxis; stop the infusion and give Epinephrine", "Red Man Syndrome; slow the infusion rate", "Stevens-Johnson Syndrome; discontinue the drug forever", "Normal side effect; continue as is"], correct: 1 },
                    { id: 19, question: "A client who is angry at his boss comes home and yells at his children. Which defense mechanism is this?", options: ["Projection", "Displacement", "Sublimation", "Rationalization"], correct: 1 },
                    { id: 20, question: "A client has a sealed radiation implant (brachytherapy). Which safety precaution is correct?", options: ["Visitors may stay for 2 hours if they wear a mask", "Pregnant nurses should not be assigned to this client", "The nurse should spend extra time in the room to provide emotional support", "If the implant falls out, pick it up with gloved hands"], correct: 1 }
                ]
            }
        ],
        nck: [
            {
                id: 'nck1',
                title: 'NCK Practice Test 1',
                questions: [
                    { id: 1, question: "In the Kenyan health system, which level is the National Referral Hospital?", options: ["Level 4", "Level 6", "Level 5", "Level 1"], correct: 1 },
                    { id: 2, question: "Which body regulates nursing practice in Kenya?", options: ["KMA", "NCK", "KMTC", "MOH"], correct: 1 }
                ]
            }
        ]
    }
};
