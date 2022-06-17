// file ini merupakan pseudocode dari proses pelabelan yang akan dilakukan
// file extension hanya membantu untuk format tulisan
// CELL & CONDITION
N = TDS UP -> PUMP WATER 
O = LIGHT DOWN -> LIGHT ON 
P = TDS DOWN -> PUMP NUTRIENT 
Q = PH DOWN -> ADD PH UP 
R = PH UP -> ADD PH DOWN

// LABEL 0
// NO ACTION = 0
IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="FALSE"), 0, VALUE_IF_FALSE)

// LABEL 1
// PUMP WATER, N = TRUE
IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="FALSE"), 1)

// LABEL 2
// LIGHT ON, O = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="FALSE"), 2)

// LABEL 3
// PUMP NUTRIENT, P = TRUE
IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="FALSE",R2="FALSE"), 3)

// LABEL 4
// ADD PH UP, Q = TRUE
IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="TRUE",R2="FALSE"), 4)

// LABEL 5
// ADD PH DOWN, R = TRUE
IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="TRUE"), 5)

// LABEL 6
// PUMP WATER + LIGHT ON
// N = TRUE, O = TRUE
IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="FALSE"), 6)

// LABEL 7
// PUMP WATER + ADD PH UP
// N = TRUE, Q = TRUE
IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="TRUE",R2="FALSE"), 7)

// LABEL 8
// PUMP WATER + ADD PH DOWN
// N = TRUE, R = TRUE
IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="TRUE"), 8)

// LABEL 9
// PUMP WATER + LIGHT ON + ADD PH UP
// N = TRUE, O = TRUE, Q = TRUE
IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="TRUE",R2="FALSE"), 9)

// LABEL 10
// PUMP WATER + LIGHT ON + ADD PH DOWN
// N = TRUE, O = TRUE, R = TRUE
IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="TRUE"), 10)

// LABEL 11
// LIGHT ON + PUMP NUTRIENT
// O = TRUE, P = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="FALSE",R2="FALSE"), 11)

// LABEL 12
// LIGHT ON + ADD PH UP
// O = TRUE, Q = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="TRUE",R2="FALSE"), 12)

// LABEL 13
// LIGHT ON + ADD PH DOWN
// O = TRUE, R = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="TRUE"), 13)

// LABEL 14
// LIGHT ON + PUMP NUTRIENT + ADD PH UP
// O = TRUE, P = TRUE, Q = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="TRUE",R2="FALSE"), 14)

// LABEL 15
// LIGHT ON + PUMP NUTRIENT + ADD PH DOWN
// O = TRUE, P = TRUE, R = TRUE
IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="FALSE",R2="TRUE"), 15)

// LABEL 16
// PUMP NUTRIENT + ADD PH UP
// P = TRUE, Q = TRUE
IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="TRUE",R2="FALSE"), 16)

// LABEL 17
// PUMP NUTRIENT + ADD PH DOWN
// P = TRUE, R = TRUE
IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="FALSE",R2="TRUE"), 17)

// IF FORMULA
=IF(CONDITION, VALUE_IF_TRUE, VALUE_IF_FALSE)

// CONCAT EXCEL FORMULA
=IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="FALSE"), 0, 
    IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="FALSE"), 1, 
       IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="FALSE"), 2, 
          IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="FALSE",R2="FALSE"), 3, 
             IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="TRUE",R2="FALSE"), 4, 
                IF(AND(N2="FALSE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="TRUE"), 5, 
                   IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="FALSE"), 6, 
                      IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="TRUE",R2="FALSE"), 7, 
                         IF(AND(N2="TRUE", O2="FALSE",P2="FALSE",Q2="FALSE",R2="TRUE"), 8, 
                            IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="TRUE",R2="FALSE"), 9, 
                               IF(AND(N2="TRUE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="TRUE"), 10, 
                                  IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="FALSE",R2="FALSE"), 11, 
                                     IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="TRUE",R2="FALSE"), 12, 
                                        IF(AND(N2="FALSE", O2="TRUE",P2="FALSE",Q2="FALSE",R2="TRUE"), 13, 
                                           IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="TRUE",R2="FALSE"), 14, 
                                              IF(AND(N2="FALSE", O2="TRUE",P2="TRUE",Q2="FALSE",R2="TRUE"), 15,
                                                 IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="TRUE",R2="FALSE"), 16, 
                                                    IF(AND(N2="FALSE", O2="FALSE",P2="TRUE",Q2="FALSE",R2="TRUE"), 17))))))))))))))))))

